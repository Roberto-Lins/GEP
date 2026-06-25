-- ============================================================================
-- 0001_init_profiles — Fase 1 (autenticação + perfil)
--
-- Cria a tabela public.profiles ligada ao auth.users do Supabase, com:
--   • criação automática do perfil no cadastro (trigger SECURITY DEFINER);
--   • RLS default-deny (cada um lê/edita só o próprio; sem leitura pública);
--   • username único, normalizado, com formato e lista de reservados;
--   • id e created_at imutáveis em updates; updated_at automático.
--
-- Idempotente o suficiente para reaplicar em dev. Ver supabase/README.md.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Função imutável: nome de usuário reservado? (usada em CHECK e em username_available)
-- Mantém paridade com src/lib/validation/auth.ts (RESERVED_USERNAMES).
-- ----------------------------------------------------------------------------
create or replace function public.is_reserved_username(p text)
returns boolean
language sql
immutable
as $$
  select lower(p) = any (array[
    'login','cadastro','app','admin','administrador','api','auth','configuracoes','config',
    'conta','perfil','recuperar-senha','redefinir-senha','verifique-email','estudar',
    'ferramentas','adicionar-curso','apoie','ano','sobre','ajuda','suporte','root','sistema',
    'null','undefined','me','termos','escola-naval','gep','hnv','det','ing4','opn','fas'
  ]);
$$;

-- ----------------------------------------------------------------------------
-- Tabela de perfis
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  username     text not null,
  display_name text not null default '',
  avatar_url   text,
  bio          text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  deleted_at   timestamptz,
  constraint profiles_username_format       check (username ~ '^[a-z0-9_]{3,30}$'),
  constraint profiles_username_lowercase    check (username = lower(username)),
  constraint profiles_username_not_reserved check (not public.is_reserved_username(username)),
  constraint profiles_display_name_len      check (char_length(display_name) <= 80),
  constraint profiles_bio_len               check (bio is null or char_length(bio) <= 280)
);

-- Unicidade case-insensitive (os valores já são armazenados em minúsculas).
create unique index if not exists profiles_username_key on public.profiles (username);

comment on table public.profiles is 'Perfil público mínimo, 1:1 com auth.users. Senha NUNCA fica aqui.';

-- ----------------------------------------------------------------------------
-- Guard de imutabilidade: id e created_at não mudam; updated_at automático.
-- ----------------------------------------------------------------------------
create or replace function public.profiles_guard_immutable()
returns trigger
language plpgsql
as $$
begin
  new.id := old.id;
  new.created_at := old.created_at;
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists profiles_guard_immutable on public.profiles;
create trigger profiles_guard_immutable
  before update on public.profiles
  for each row execute function public.profiles_guard_immutable();

-- ----------------------------------------------------------------------------
-- Criação automática do perfil ao criar o usuário (server-side, idempotente).
-- Lê username/display_name de raw_user_meta_data (preenchidos no signUp).
-- SECURITY DEFINER → roda como dono e ignora a RLS para inserir.
-- ----------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_username text;
  v_display  text;
begin
  v_username := lower(coalesce(new.raw_user_meta_data ->> 'username', ''));
  v_display  := coalesce(new.raw_user_meta_data ->> 'display_name', '');

  -- Fallbacks defensivos (caso o cadastro não venha pela nossa API).
  if v_username !~ '^[a-z0-9_]{3,30}$' or public.is_reserved_username(v_username) then
    v_username := 'user_' || left(replace(new.id::text, '-', ''), 12);
  end if;
  if v_display = '' then
    v_display := v_username;
  end if;

  begin
    insert into public.profiles (id, username, display_name)
    values (new.id, v_username, v_display);
  exception
    when unique_violation then
      -- corrida no username: anexa sufixo curto e tenta uma vez mais.
      insert into public.profiles (id, username, display_name)
      values (new.id, left(v_username, 24) || '_' || floor(random() * 10000)::int::text, v_display)
      on conflict (id) do nothing;
  end;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----------------------------------------------------------------------------
-- Disponibilidade de username SEM vazar dados de perfil (só boolean).
-- ----------------------------------------------------------------------------
create or replace function public.username_available(p_username text)
returns boolean
language sql
security definer
set search_path = ''
as $$
  select
    not public.is_reserved_username(lower(p_username))
    and not exists (
      select 1 from public.profiles where username = lower(p_username)
    );
$$;

revoke execute on function public.username_available(text) from public;
grant execute on function public.username_available(text) to authenticated, service_role;

-- ----------------------------------------------------------------------------
-- Row-Level Security: default-deny. Cada um só o próprio; sem leitura pública.
-- ----------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.profiles force row level security;

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
  for select
  using (auth.uid() = id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Sem policy de INSERT/DELETE → negados para usuários. Criação é via trigger
-- (SECURITY DEFINER); remoção segue o ciclo de vida do auth.users (cascade).

-- Privilégios de tabela (RLS ainda se aplica por cima).
revoke all on public.profiles from anon;            -- sem leitura pública nesta fase
grant select, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
