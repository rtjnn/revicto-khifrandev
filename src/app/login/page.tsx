"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getSupabase } from '@/libs/supabase'

const supabase = getSupabase()

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMsg, setErrorMsg] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setErrorMsg(null);
  setLoading(true);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  setLoading(false);

  if (error) {
    setErrorMsg(error.message);
  } else if (data.user && data.session) {
    try {
      // ⬇️ Simpan access_token ke cookie agar bisa dibaca di middleware
      document.cookie = `access_token=${data.session.access_token}; path=/; max-age=3600`;

      // ⬇️ Optional: update ke table profiles (jika memang kamu butuhkan)
      await supabase.from("profiles").upsert([
        {
          id: data.user.id,
          username: "",
          full_name: "",
          avatar_url: "",
        },
      ]);
    } catch (e) {
      console.error("Upsert profile error:", e);
    }

    // ⬇️ Redirect ke dashboard setelah login
    router.push("/adminpage");
  }
}

  return (
    <div className="max-w-3xl flex flex-col mx-auto size-full">
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8">
          <a className="flex-none text-xl font-semibold sm:text-3xl dark:text-white" href="#">
            K; Khifrandev
          </a>
        </nav>
      </header>

      <main id="content">
        <div className="max-w-md mx-auto mt-10 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-lg">
          <div className="p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don't have an account yet?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline dark:text-blue-500">
                  Sign up here
                </Link>
              </p>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleLogin}>
              {errorMsg && (
                <p className="text-sm text-red-600 bg-red-100 p-2 rounded-md">
                  {errorMsg}
                </p>
              )}

              <div>
                <label htmlFor="email" className="block text-sm mb-1 dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            className="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            href="/"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to homepage
          </Link>
        </div>
      </main>

      <footer className="mt-auto text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-neutral-500">© All Rights Reserved. 2022.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
