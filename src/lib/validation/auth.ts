// Schemas de validação (Zod) para os fluxos de autenticação e perfil.
// Usados tanto no cliente (UX) quanto no servidor (autoridade). Limites de tamanho
// em todos os campos para mitigar payloads abusivos.

import { z } from 'zod';

/**
 * Usernames reservados: rotas reais da app + slugs da estrutura do Roberto (que
 * permanecem reservados ao conteúdo curado). NÃO é regra "especial por slug" de
 * negócio — é só proteção de namespace de URL/identidade. Ver ADR 0010.
 */
export const RESERVED_USERNAMES = new Set<string>([
  // rotas/áreas da aplicação
  'login', 'cadastro', 'app', 'admin', 'administrador', 'api', 'auth',
  'configuracoes', 'config', 'conta', 'perfil', 'recuperar-senha', 'redefinir-senha',
  'verifique-email', 'estudar', 'ferramentas', 'adicionar-curso', 'apoie', 'ano',
  'sobre', 'ajuda', 'suporte', 'root', 'sistema', 'null', 'undefined', 'me',
  // slugs de curso reservados (estrutura do Roberto / Escola Naval)
  'escola-naval', 'gep', 'hnv', 'det', 'ing4', 'opn', 'fas',
]);

export const USERNAME_REGEX = /^[a-z0-9_]{3,30}$/;

export function isReservedUsername(username: string): boolean {
  return RESERVED_USERNAMES.has(username.trim().toLowerCase());
}

export const usernameSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(3, 'Mínimo de 3 caracteres.')
  .max(30, 'Máximo de 30 caracteres.')
  .regex(USERNAME_REGEX, 'Use apenas letras minúsculas, números e _ (3–30 caracteres).')
  .refine((u) => !RESERVED_USERNAMES.has(u), 'Este nome de usuário é reservado.');

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(3)
  .max(254, 'E-mail muito longo.')
  .email('E-mail inválido.');

// Limite superior de 72 bytes: o bcrypt (usado pelo GoTrue) ignora além disso.
export const passwordSchema = z
  .string()
  .min(8, 'A senha deve ter ao menos 8 caracteres.')
  .max(72, 'A senha deve ter no máximo 72 caracteres.');

export const displayNameSchema = z
  .string()
  .trim()
  .min(1, 'Informe um nome de exibição.')
  .max(80, 'Nome muito longo (máx. 80).');

export const bioSchema = z.string().trim().max(280, 'Bio muito longa (máx. 280).');

export const signupSchema = z
  .object({
    username: usernameSchema,
    display_name: displayNameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirm: z.string().max(72),
    terms: z.string().optional(),
  })
  .refine((d) => d.password === d.confirm, {
    path: ['confirm'],
    message: 'As senhas não coincidem.',
  })
  .refine((d) => d.terms === 'on' || d.terms === 'true', {
    path: ['terms'],
    message: 'É preciso aceitar os termos de uso.',
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Informe a senha.').max(72),
});

export const recoverSchema = z.object({ email: emailSchema });

export const resetSchema = z
  .object({ password: passwordSchema, confirm: z.string().max(72) })
  .refine((d) => d.password === d.confirm, {
    path: ['confirm'],
    message: 'As senhas não coincidem.',
  });

export const profileSchema = z.object({
  display_name: displayNameSchema,
  username: usernameSchema,
  bio: bioSchema.optional().or(z.literal('')),
});

export const changePasswordSchema = z
  .object({
    current_password: z.string().min(1, 'Informe a senha atual.').max(72),
    password: passwordSchema,
    confirm: z.string().max(72),
  })
  .refine((d) => d.password === d.confirm, {
    path: ['confirm'],
    message: 'As senhas não coincidem.',
  });

export const resendSchema = z.object({ email: emailSchema });

/** Lê e valida um FormData contra um schema, devolvendo um resultado discriminado. */
export type ParseResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: Record<string, string> };

export function parseForm<T extends z.ZodTypeAny>(
  schema: T,
  form: FormData,
): ParseResult<z.infer<T>> {
  const raw: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === 'string') raw[key] = value;
  }
  const result = schema.safeParse(raw);
  if (result.success) return { ok: true, data: result.data };
  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join('.') || '_';
    if (!errors[key]) errors[key] = issue.message;
  }
  return { ok: false, errors };
}
