// /lib/supabase.js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_ANON_KEY"
);

export async function signup(email, password, saltBase64) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { salt: saltBase64 }
    }
  });
  return { data, error };
}

export async function login(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function getUserSalt() {
  const { data } = await supabase.auth.getUser();
  return data.user?.user_metadata?.salt;
}

export async function saveEncryptedSecret(name, encrypted) {
  return supabase.from("totp_accounts").insert({
    name,
    secret_encrypted: encrypted,
    user_id: (await supabase.auth.getUser()).data.user.id
  });
}

export async function fetchEncryptedSecrets() {
  return supabase.from("totp_accounts").select("*").order("created_at");
}

export async function deleteEntry(id) {
  return supabase.from("totp_accounts").delete().eq("id", id);
}
