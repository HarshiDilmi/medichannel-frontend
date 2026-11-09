
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    nic: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
    setSuccess(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
    const phonePattern = /^(?:\+94|0)?7[0-9]{8}$/;

    if (!nicPattern.test(form.nic.trim())) {
      setMessage("Please enter a valid Sri Lankan NIC number.");
      return;
    }

    if (!phonePattern.test(form.phone.trim())) {
      setMessage("Please enter a valid Sri Lankan mobile number.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setSuccess(true);
    setMessage("Registration form validated successfully! Please login.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 to-blue-600 px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-800">
            MediChannel
          </h1>
          <h2 className="mt-3 text-xl font-bold text-slate-800">
            Create Patient Account
          </h2>
          <p className="mt-2 text-slate-500">
            Register with Lanka Care Hospital
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">NIC Number</label>
            <input
              name="nic"
              value={form.nic}
              onChange={handleChange}
              placeholder="123456789V or 200012345678"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="07XXXXXXXX"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 8 characters"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />
          </div>

          {message && (
            <p className={`rounded-lg p-3 text-center text-sm ${
              success
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Create Patient Account
          </button>
        </form>

        {success && (
          <button
            onClick={() => router.push("/login")}
            className="mt-4 w-full rounded-lg bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Go to Login
          </button>
        )}

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-blue-700">
            Login
          </Link>
        </p>

        <div className="mt-5 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
