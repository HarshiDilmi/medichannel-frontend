
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Appointment = {
  id: number;
  doctor: string;
  specialization: string;
  date: string;
  time: string;
  status: string;
  type: string;
};

type PatientProfile = {
  fullName?: string;
  email?: string;
};

const defaultAppointments: Appointment[] = [
  {
    id: 1,
    doctor: "Dr. Nimal Perera",
    specialization: "Cardiologist",
    date: "2026-11-12",
    time: "10:30 AM",
    status: "Confirmed",
    type: "Physical",
  },
  {
    id: 2,
    doctor: "Dr. Sanduni Silva",
    specialization: "Paediatrician",
    date: "2026-11-15",
    time: "02:00 PM",
    status: "Pending",
    type: "Online",
  },
];

export default function PatientDashboard() {
  const [profile, setProfile] = useState<PatientProfile>({
    fullName: "Patient Name",
    email: "patient@email.com",
  });

  const [appointments, setAppointments] =
    useState<Appointment[]>(defaultAppointments);

  useEffect(() => {
    const savedProfile = localStorage.getItem("patientProfile");

    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);

        setProfile({
          fullName: parsedProfile.fullName || "Patient Name",
          email: parsedProfile.email || "patient@email.com",
        });
      } catch {
        console.error("Invalid patient profile data");
      }
    }

    const savedAppointments = localStorage.getItem("patientAppointments");

    if (savedAppointments) {
      try {
        const parsedAppointments = JSON.parse(savedAppointments);

        if (Array.isArray(parsedAppointments)) {
          setAppointments([
            ...defaultAppointments,
            ...parsedAppointments,
          ]);
        }
      } catch {
        console.error("Invalid appointment data");
      }
    }
  }, []);

  const upcomingCount = appointments.filter(
    (appointment) =>
      appointment.status !== "Cancelled" &&
      appointment.status !== "Completed"
  ).length;

  const completedCount = appointments.filter(
    (appointment) => appointment.status === "Completed"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-900 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            MediChannel
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900"
          >
            Logout
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold text-teal-600">
            PATIENT PORTAL
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Welcome, {profile.fullName}!
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your appointments and healthcare activities.
          </p>
        </div>

        {/* Patient Profile */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-blue-900">
              Patient Profile
            </h2>

            <Link
              href="/patient/profile"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Manage Profile
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Full Name</p>
              <p className="font-semibold">{profile.fullName}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-semibold">{profile.email}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Account Type</p>
              <p className="font-semibold text-teal-600">Customer</p>
            </div>
          </div>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Appointments",
              value: String(appointments.length),
              icon: "📅",
            },
            {
              title: "Upcoming",
              value: String(upcomingCount),
              icon: "⏰",
            },
            {
              title: "Completed",
              value: String(completedCount),
              icon: "✅",
            },
            {
              title: "Notifications",
              value: "04",
              icon: "🔔",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <p className="text-3xl">{item.icon}</p>
              <p className="mt-4 text-sm text-slate-500">{item.title}</p>

              <h2 className="mt-1 text-3xl font-bold text-blue-800">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Appointments */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">My Appointments</h2>

              <Link
                href="/appointments/book"
                className="rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
              >
                + Book Appointment
              </Link>
            </div>

            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="rounded-xl border bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold">
                        {appointment.doctor}
                      </h3>

                      <p className="text-sm text-teal-600">
                        {appointment.specialization}
                      </p>
                    </div>

                    <span
                      className={
                        appointment.status === "Confirmed"
                          ? "rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700"
                          : "rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700"
                      }
                    >
                      {appointment.status}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
                    <p>📅 {appointment.date}</p>
                    <p>🕒 {appointment.time}</p>
                    <p>🏥 {appointment.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <aside className="space-y-5">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Quick Actions</h2>

              <div className="mt-5 space-y-3">
                <Link
                  href="/doctors"
                  className="block rounded-lg bg-blue-700 p-3 text-center font-semibold text-white hover:bg-blue-800"
                >
                  Find a Doctor
                </Link>

                <Link
                  href="/appointments/book"
                  className="block rounded-lg border p-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/appointments"
                  className="block rounded-lg border p-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Appointment History
                </Link>

                <Link
                  href="/notifications"
                  className="block rounded-lg border p-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                >
                  View Notifications
                </Link>

                <Link
                  href="/feedback"
                  className="block rounded-lg border p-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Submit Feedback
                </Link>

                <Link
                  href="/patient/profile"
                  className="block rounded-lg border p-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Manage Profile
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-teal-50 p-6">
              <h2 className="text-lg font-bold text-teal-900">
                Your Health Matters!
              </h2>

              <p className="mt-3 text-sm leading-6 text-teal-800">
                Keep your appointments up to date and stay connected with your
                healthcare team through MediChannel.
              </p>
            </div>
          </aside>
        </div>

        <footer className="mt-12 border-t py-6 text-center text-sm text-slate-500">
          © 2026 MediChannel - Lanka Care Hospital
        </footer>
      </section>
    </main>
  );
}
