"use client";

import { useState } from "react";

export default function BookAppointment() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Physical");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!doctor || !date || !time) {
      alert("Please fill all required fields.");
      return;
    }

    const specializations: Record<string, string> = {
      "Dr. Nimal Perera": "Cardiologist",
      "Dr. Sanduni Silva": "Paediatrician",
      "Dr. Kasun Fernando": "Dermatologist",
      "Dr. Amali Perera": "Neurologist",
    };

    const newAppointment = {
      id: Date.now(),
      doctor,
      specialization: specializations[doctor],
      date,
      time,
      status: "Pending",
      type,
    };

    const savedAppointments = localStorage.getItem("patientAppointments");

    const appointments = savedAppointments
      ? JSON.parse(savedAppointments)
      : [];

    appointments.push(newAppointment);

    localStorage.setItem(
      "patientAppointments",
      JSON.stringify(appointments)
    );

    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <a
          href="/patient/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </a>

        <div className="mt-6 rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-slate-800">
            Book an Appointment
          </h1>

          <p className="mt-2 text-slate-500">
            Select your doctor and preferred appointment details.
          </p>

          {success ? (
            <div className="mt-8 rounded-xl bg-green-50 p-6 text-center">
              <h2 className="text-xl font-bold text-green-700">
                Appointment Submitted!
              </h2>

              <p className="mt-2 text-green-600">
                Your appointment has been saved successfully.
              </p>

              <a
                href="/patient/dashboard"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
              >
                Back to Dashboard
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block font-medium">
                  Select Doctor
                </label>

                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full rounded-lg border p-3"
                  required
                >
                  <option value="">Choose a doctor</option>
                  <option value="Dr. Nimal Perera">
                    Dr. Nimal Perera - Cardiologist
                  </option>
                  <option value="Dr. Sanduni Silva">
                    Dr. Sanduni Silva - Paediatrician
                  </option>
                  <option value="Dr. Kasun Fernando">
                    Dr. Kasun Fernando - Dermatologist
                  </option>
                  <option value="Dr. Amali Perera">
                    Dr. Amali Perera - Neurologist
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Appointment Type
                </label>

                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Physical"
                      checked={type === "Physical"}
                      onChange={(e) => setType(e.target.value)}
                    />
                    Physical
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Online"
                      checked={type === "Online"}
                      onChange={(e) => setType(e.target.value)}
                    />
                    Online
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Appointment Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toLocaleDateString("en-CA")}
                  className="w-full rounded-lg border p-3"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Preferred Time
                </label>

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-lg border p-3"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Submit Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}