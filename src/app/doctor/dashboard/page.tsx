
"use client";

import { useState } from "react";
import Link from "next/link";

const initialAppointments = [
  {
    id: 1,
    patient: "Kasun Perera",
    time: "09:00 AM",
    type: "Physical",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Amali Silva",
    time: "10:30 AM",
    type: "Online",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Nimal Fernando",
    time: "11:30 AM",
    type: "Physical",
    status: "Pending",
  },
  {
    id: 4,
    patient: "Sanduni Jayasuriya",
    time: "01:00 PM",
    type: "Online",
    status: "Confirmed",
  },
];

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const updateStatus = (id: number, status: string) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
  };

  const confirmedCount = appointments.filter(
    (item) => item.status === "Confirmed"
  ).length;

  const pendingCount = appointments.filter(
    (item) => item.status === "Pending"
  ).length;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">MediChannel</h1>
            <p className="text-sm text-blue-100">Doctor Dashboard</p>
          </div>

          <Link
            href="/"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome, Doctor!
          </h2>
          <p className="mt-2 text-gray-500">
            Manage your appointments and consultation sessions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Appointments</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-700">
              {appointments.length}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Confirmed Appointments</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {confirmedCount}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Pending Appointments</p>
            <h3 className="mt-2 text-3xl font-bold text-orange-500">
              {pendingCount}
            </h3>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            Today's Appointments
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600">
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b">
                    <td className="p-4 font-medium text-gray-800">
                      {appointment.patient}
                    </td>

                    <td className="p-4 text-gray-600">
                      {appointment.time}
                    </td>

                    <td className="p-4 text-gray-600">
                      {appointment.type}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : appointment.status === "Pending"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {appointment.status === "Pending" ? (
                        <button
                          onClick={() =>
                            updateStatus(appointment.id, "Confirmed")
                          }
                          className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            updateStatus(appointment.id, "Completed")
                          }
                          className="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700 hover:bg-green-200"
                        >
                          Complete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
