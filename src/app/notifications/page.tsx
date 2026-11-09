
"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Appointment Confirmed",
      message: "Your appointment with Dr. Nimal Perera has been confirmed.",
      date: "2026-11-08",
      type: "Appointment",
      read: false,
    },
    {
      id: 2,
      title: "Payment Reminder",
      message: "Please complete your appointment payment before the session.",
      date: "2026-11-07",
      type: "Payment",
      read: false,
    },
    {
      id: 3,
      title: "Hospital Announcement",
      message: "Lanka Care Hospital will be open during normal hours.",
      date: "2026-11-06",
      type: "Announcement",
      read: true,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/patient/dashboard"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Notifications
            </h1>
            <p className="mt-2 text-gray-500">
              Stay updated with your appointments and hospital news.
            </p>
          </div>

          <div className="rounded-xl bg-blue-100 px-5 py-3 text-blue-700">
            <span className="font-bold">{unreadCount}</span> Unread
          </div>
        </div>

        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
              <p className="text-lg text-gray-500">
                No notifications available.
              </p>
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl border bg-white p-5 shadow-sm ${
                  item.read ? "border-gray-200" : "border-blue-300"
                }`}
              >
                <div className="flex flex-wrap justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>

                      {!item.read && (
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                          New
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-gray-600">{item.message}</p>

                    <p className="mt-3 text-sm text-gray-400">
                      {item.type} • {item.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!item.read && (
                      <button
                        onClick={() => markAsRead(item.id)}
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                      >
                        Mark as Read
                      </button>
                    )}

                    <button
                      onClick={() => deleteNotification(item.id)}
                      className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600 hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
