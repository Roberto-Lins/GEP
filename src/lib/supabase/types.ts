// Tipos do banco (Supabase). Fase 1: apenas `profiles`.
//
// Como REGENERAR quando o schema crescer (requer Supabase CLI + projeto):
//   supabase gen types typescript --project-id <ref> --schema public > src/lib/supabase/types.ts
// Por enquanto é mantido à mão para refletir supabase/migrations/0001_init_profiles.sql.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          display_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          id: string;
          username: string;
          display_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
          deleted_at?: string | null;
        };
        Update: {
          // `id` é imutável (RLS + trigger impedem alteração); aqui é opcional só por
          // forma — nunca o envie em um update.
          username?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          updated_at?: string;
          deleted_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: {
      username_available: {
        Args: { p_username: string };
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

/** Atalho para o tipo de uma linha de `profiles`. */
export type Profile = Database['public']['Tables']['profiles']['Row'];
