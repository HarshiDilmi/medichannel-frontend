"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function PatientProfile() {
  const [form, setForm] = useState({
    fullName: "Patient Name",
    nic: "200012345678",
    email: "patient@gmail.com",
    phone: "0712345678",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("patientProfile");

    if (savedProfile) {
      try {
        setForm(JSON.parse(savedProfile));
      } catch {
        localStorage.removeItem("patientProfile");
      }
    }

    setLoaded(true);
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
    const phonePattern = /^(?:\+94|0)?7[0-9]{8}$/;

    if (!nicPattern.test(form.nic)) {
      setError("Please enter a valid NIC number.");
      return;
    }

    if (!phonePattern.test(form.phone)) {
      setError("Please enter a valid Sri Lankan phone number.");
      return;
    }

    localStorage.setItem("patientProfile", JSON.stringify(form));

    setError("");
    setMessage("Profile updated successfully!");
  }

  if (!loaded) {
    return <p className="p-10 text-center">Loading profile...</p>;
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-900 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            MediChannel
          </Link>

          <Link
            href="/patient/dashboard"
            className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
              👤
            </div>

            <h1 className="mt-4 text-3xl font-bold text-blue-900">
              My Profile
            </h1>

            <p className="mt-2 text-slate-500">
              View and update your personal information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold">
                Full Name
              </label>

              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                NIC Number
              </label>

              <input
                name="nic"
                value={form.nic}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-center font-semibold text-red-700">
                {error}
              </p>
            )}

            {message && (
              <p className="rounded-lg bg-green-50 p-3 text-center font-semibold text-green-700">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Save Changes
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}