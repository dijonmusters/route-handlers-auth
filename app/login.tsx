"use client";

import { useSupabase } from "./supabase-context";

export function Login() {
  const { supabase } = useSupabase();

  const signUp = () => {
    supabase.auth.signUp({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="justify-end flex text-white gap-4 mb-6">
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
