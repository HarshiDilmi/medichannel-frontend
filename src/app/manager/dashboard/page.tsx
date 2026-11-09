
"use client";

import { useState } from "react";
import Link from "next/link";

const initialSessions = [
  {
    id: 1,
    doctor: "Dr. Nimal Perera",
    specialty: "Cardiology",
    time: "09:00 AM - 11:00 AM",
    room: "Room 01",
    status: "Scheduled",
  },
  {
    id: 2,
    doctor: "Dr. Sanduni Silva",
    specialty: "Paediatrics",
    time: "11:00 AM - 01:00 PM",
    room: "Room 02",
    status: "Scheduled",
  },
  {
    id: 3,
    doctor: "Dr. Kasun Fernando",
    specialty: "Dermatology",
    time: "02:00 PM - 04:00 PM",
    room: "Room 03",
    status: "In Progress",
  },
];

export default function ManagerDashboard() {
  const [sessions, setSessions] = useState(initialSessions);

  const updateStatus = (id: number, status: string) => {
    setSessions((previous) =>
      previous.map((session) =>
        session.id === id ? { ...session, status } : session
      )
    );
  };

  const scheduledCount = sessions.filter(
    (session) => session.status === "Scheduled"
  ).length;

  const activeCount = sessions.filter(
    (session) => session.status === "In Progress"
  ).length;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">MediChannel</h1>
            <p className="text-sm text-teal-100">Manager Dashboard</p>
          </div>

          <Link
            href="/"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome, Manager!
        </h2>

        <p className="mt-2 text-gray-500">
          Monitor hospital activities and manage doctor sessions.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Sessions</p>
            <h3 className="mt-2 text-3xl font-bold text-teal-700">
              {sessions.length}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Scheduled Sessions</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-600">
              {scheduledCount}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Sessions In Progress</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {activeCount}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Appointments Today</p>
            <h3 className="mt-2 text-3xl font-bold text-orange-500">45</h3>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            Doctor Session Management
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600">
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Specialisation</th>
                  <th className="p-4">Session Time</th>
                  <th className="p-4">Room</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {sessions.map((session) => (
                  <tr key={session.id} className="border-b">
                    <td className="p-4 font-medium text-gray-800">
                      {session.doctor}
                    </td>

                    <td className="p-4 text-gray-600">
                      {session.specialty}
                    </td>

                    <td className="p-4 text-gray-600">
                      {session.time}
                    </td>

                    <td className="p-4 text-gray-600">
                      {session.room}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          session.status === "In Progress"
                            ? "bg-green-100 text-green-700"
                            : session.status === "Completed"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {session.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {session.status !== "Completed" && (
                        <button
                          onClick={() =>
                            updateStatus(
                              session.id,
                              session.status === "Scheduled"
                                ? "In Progress"
                                : "Completed"
                            )
                          }
                          className="rounded-lg bg-teal-600 px-3 py-2 text-sm text-white hover:bg-teal-700"
                        >
                          {session.status === "Scheduled"
                            ? "Start Session"
                            : "Complete"}
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
