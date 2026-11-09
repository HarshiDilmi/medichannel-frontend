
"use client";

import { useState } from "react";
import Link from "next/link";

export default function FeedbackPage() {
  const [doctor, setDoctor] = useState("");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!doctor || !comment.trim()) {
      alert("Please select a doctor and enter your feedback.");
      return;
    }

    setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/patient/dashboard"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">
            Share Your Feedback
          </h1>

          <p className="mt-2 text-gray-500">
            Tell us about your experience at Lanka Care Hospital.
          </p>

          {success ? (
            <div className="mt-8 rounded-xl bg-green-100 p-6 text-center">
              <h2 className="text-xl font-bold text-green-700">
                Thank You!
              </h2>
              <p className="mt-2 text-green-700">
                Your feedback has been submitted successfully.
              </p>
              <button
                onClick={() => {
                  setSuccess(false);
                  setDoctor("");
                  setRating("5");
                  setComment("");
                }}
                className="mt-4 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
              >
                Submit Another Feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Select Doctor
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
                  required
                >
                  <option value="">Choose a doctor</option>
                  <option value="Dr. Nimal Perera">Dr. Nimal Perera</option>
                  <option value="Dr. Sanduni Silva">Dr. Sanduni Silva</option>
                  <option value="Dr. Kasun Fernando">Dr. Kasun Fernando</option>
                  <option value="Dr. Amali Perera">Dr. Amali Perera</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Rate Your Experience
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
                >
                  <option value="5">★★★★★ - Excellent</option>
                  <option value="4">★★★★ - Very Good</option>
                  <option value="3">★★★ - Good</option>
                  <option value="2">★★ - Fair</option>
                  <option value="1">★ - Poor</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Your Comments
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={5}
                  placeholder="Write your experience here..."
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-700"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
