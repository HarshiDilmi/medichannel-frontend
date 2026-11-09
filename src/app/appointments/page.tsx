

"use client";

import { useState } from "react";

type Appointment = {
  id: number;
  number: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  type: string;
  status: string;
};

export default function MyAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      number: "MC-001",
      doctor: "Dr. Nimal Perera",
      specialty: "Cardiologist",
      date: "2026-11-12",
      time: "09:00 AM",
      type: "Physical",
      status: "Confirmed",
    },
    {
      id: 2,
      number: "MC-002",
      doctor: "Dr. Sanduni Silva",
      specialty: "Paediatrician",
      date: "2026-11-15",
      time: "10:00 AM",
      type: "Online",
      status: "Pending",
    },
  ]);

  function cancelAppointment(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (confirmed) {
      setAppointments((current) =>
        current.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: "Cancelled" }
            : appointment
        )
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        <a
          href="/patient/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              My Appointments
            </h1>
            <p className="mt-2 text-slate-500">
              View and manage your hospital appointments.
            </p>
          </div>

          <a
            href="/appointments/book"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            + Book Appointment
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Total Appointments</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">
              {appointments.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Confirmed</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {appointments.filter((a) => a.status === "Confirmed").length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Cancelled</p>
            <h2 className="mt-2 text-3xl font-bold text-red-600">
              {appointments.filter((a) => a.status === "Cancelled").length}
            </h2>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">

                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Appointment No: {appointment.number}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-slate-800">
                    {appointment.doctor}
                  </h2>

                  <p className="text-slate-500">
                    {appointment.specialty}
                  </p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    appointment.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : appointment.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {appointment.status}
                </span>

              </div>

              <div className="mt-5 grid gap-4 border-t pt-5 sm:grid-cols-3">

                <div>
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {appointment.date}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Time</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {appointment.time}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Appointment Type</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    {appointment.type}
                  </p>
                </div>

              </div>

              {appointment.status !== "Cancelled" && (
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => cancelAppointment(appointment.id)}
                    className="rounded-lg border border-red-500 px-5 py-2 font-medium text-red-600 hover:bg-red-50"
                  >
                    Cancel Appointment
                  </button>
                </div>
              )}

            </div>
          ))}

          {appointments.length === 0 && (
            <div className="rounded-xl bg-white p-10 text-center shadow">
              <h2 className="text-xl font-semibold text-slate-700">
                No Appointments Found
              </h2>
              <p className="mt-2 text-slate-500">
                You have not booked any appointments yet.
              </p>
              <a
                href="/appointments/book"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
              >
                Book Your First Appointment
              </a>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
