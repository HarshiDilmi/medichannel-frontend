
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const dashboards: Record<string, string> = {
      patient: "/patient/dashboard",
      doctor: "/doctor/dashboard",
      manager: "/manager/dashboard",
      admin: "/admin/dashboard",
    };

    router.push(dashboards[role]);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 to-blue-600 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-700">
            MediChannel
          </h1>
          <p className="mt-2 text-gray-500">
            Welcome Back! Please Login
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              User Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-bold text-white hover:bg-blue-800"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-blue-700">
            Register
          </Link>
        </p>

        <div className="mt-5 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
