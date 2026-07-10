import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith("http")) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  console.warn("Supabase initialization failed:", error);
}

export const supabase = supabaseClient as unknown as SupabaseClient;