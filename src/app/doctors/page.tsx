
"use client";

import { useState } from "react";

const doctors = [
  {
    name: "Dr. Nimal Perera",
    specialization: "Cardiologist",
    qualification: "MBBS, MD (Cardiology)",
    experience: "15 Years Experience",
    icon: "❤️",
  },
  {
    name: "Dr. Sanduni Silva",
    specialization: "Paediatrician",
    qualification: "MBBS, MD (Paediatrics)",
    experience: "10 Years Experience",
    icon: "👶",
  },
  {
    name: "Dr. Kasun Fernando",
    specialization: "Dermatologist",
    qualification: "MBBS, MD (Dermatology)",
    experience: "12 Years Experience",
    icon: "🩺",
  },
  {
    name: "Dr. Amali Perera",
    specialization: "Neurologist",
    qualification: "MBBS, MD (Neurology)",
    experience: "8 Years Experience",
    icon: "🧠",
  },
];

export default function DoctorsPage() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesName = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSpecialization =
      specialization === "All" ||
      doctor.specialization === specialization;

    return matchesName && matchesSpecialization;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-900 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Find Your Doctor</h1>
        <p className="mt-4 text-blue-100">
          Find experienced doctors for your healthcare needs.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Search Doctors</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doctor name..."
              className="rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="rounded-lg border p-3"
            >
              <option value="All">All Specialisations</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Paediatrician">Paediatrician</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
            </select>

            <button
              onClick={() => {
                setSearch("");
                setSpecialization("All");
              }}
              className="rounded-lg bg-blue-700 p-3 font-semibold text-white hover:bg-blue-800"
            >
              Clear Search
            </button>
          </div>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Available Doctors ({filteredDoctors.length})
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl">
                {doctor.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">{doctor.name}</h3>

              <p className="mt-2 font-semibold text-teal-600">
                {doctor.specialization}
              </p>

              <p className="mt-3 text-sm text-slate-600">
                {doctor.qualification}
              </p>

              <p className="mt-2 text-sm text-slate-600">
                {doctor.experience}
              </p>

              <button className="mt-6 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="rounded-xl bg-white p-8 text-center text-slate-500">
            No doctors found. Please try another search.
          </p>
        )}
      </section>
    </main>
  );
}
