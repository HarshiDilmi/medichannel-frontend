
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Nimal Perera", specialty: "Cardiologist", status: "Active" },
    { id: 2, name: "Dr. Sanduni Silva", specialty: "Paediatrician", status: "Active" },
    { id: 3, name: "Dr. Kasun Fernando", specialty: "Dermatologist", status: "Inactive" },
    { id: 4, name: "Dr. Amali Perera", specialty: "Neurologist", status: "Active" },
  ]);

  const toggleStatus = (id: number) => {
    setDoctors((previous) =>
      previous.map((doctor) =>
        doctor.id === id
          ? { ...doctor, status: doctor.status === "Active" ? "Inactive" : "Active" }
          : doctor
      )
    );
  };

  const activeDoctors = doctors.filter(
    (doctor) => doctor.status === "Active"
  ).length;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-indigo-700 px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">MediChannel</h1>
            <p className="text-sm text-indigo-100">Admin Dashboard</p>
          </div>
          <Link
            href="/"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome, Administrator!
        </h2>
        <p className="mt-2 text-gray-500">
          Manage hospital users, doctors and appointments.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Patients</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-700">1,250</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Doctors</p>
            <h3 className="mt-2 text-3xl font-bold text-indigo-700">
              {doctors.length}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Active Doctors</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {activeDoctors}
            </h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Appointments</p>
            <h3 className="mt-2 text-3xl font-bold text-orange-500">320</h3>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-800">
              Doctor Management
            </h2>
            <span className="rounded-lg bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              Manage Doctors
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-50 text-gray-600">
                  <th className="p-4">Doctor Name</th>
                  <th className="p-4">Specialisation</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.id} className="border-b">
                    <td className="p-4 font-medium text-gray-800">
                      {doctor.name}
                    </td>
                    <td className="p-4 text-gray-600">
                      {doctor.specialty}
                    </td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          doctor.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {doctor.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => toggleStatus(doctor.id)}
                        className="rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
                      >
                        {doctor.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
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
