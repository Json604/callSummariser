import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';
declare module '@env' {
  export const EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);