import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

try {
  if (!supabaseUrl) {
    console.warn("Supabase initialization failed: VITE_SUPABASE_URL is not defined");
  } else if (!supabaseAnonKey) {
    console.warn("Supabase initialization failed: VITE_SUPABASE_ANON_KEY is not defined");
  } else if (!supabaseUrl.startsWith("http")) {
    console.warn("Supabase initialization failed: supabaseUrl is not a valid URL");
  } else {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    console.log("Supabase client initialized successfully");
  }
} catch (error) {
  console.error("Supabase initialization error:", error);
}

export const supabase = supabaseClient as unknown as SupabaseClient;
