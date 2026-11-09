
import Link from "next/link";

const features = [
  { icon: "👨‍⚕️", title: "Find Doctors", description: "Search and find experienced doctors by specialization.", link: "/doctors" },
  { icon: "📅", title: "Easy Appointments", description: "Book your hospital or online appointments easily.", link: "/appointments/book" },
  { icon: "⏱️", title: "Live Queue Updates", description: "Check your appointment queue and estimated waiting time.", link: "/appointments" },
  { icon: "💬", title: "Online Consultation", description: "Communicate securely with your treating doctor.", link: "/patient/dashboard" },
];

const dashboards = [
  { name: "Patient Dashboard", link: "/patient/dashboard" },
  { name: "Doctor Dashboard", link: "/doctor/dashboard" },
  { name: "Manager Dashboard", link: "/manager/dashboard" },
  { name: "Admin Dashboard", link: "/admin/dashboard" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-blue-700">
            MediChannel<span className="text-teal-500">.</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/doctors" className="hover:text-blue-600">Find Doctors</Link>
            <Link href="/appointments/book" className="hover:text-blue-600">Book Appointment</Link>
            <Link href="/appointments" className="hover:text-blue-600">My Appointments</Link>
            <Link href="/notifications" className="hover:text-blue-600">Notifications</Link>
            <Link href="/feedback" className="hover:text-blue-600">Feedback</Link>
          </div>

          <div className="flex gap-3">
            <Link href="/login" className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-700 hover:bg-blue-50">
              Login
            </Link>
            <Link href="/register" className="rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold tracking-widest text-teal-300">
              LANKA CARE HOSPITAL
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Your Health,<span className="text-teal-300"> Our Priority.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
              Book appointments with trusted doctors, manage your consultations
              and stay updated with our smart hospital channelling system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/doctors" className="rounded-lg bg-teal-400 px-7 py-3 font-bold text-blue-950 hover:bg-teal-300">
                Find a Doctor →
              </Link>
              <Link href="/register" className="rounded-lg border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-blue-900">
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div className="text-center text-7xl">🏥</div>
              <h2 className="mt-6 text-center text-2xl font-bold">Lanka Care Hospital</h2>
              <p className="mt-2 text-center text-blue-100">Quality healthcare made simple.</p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-3xl font-bold text-teal-300">40+</p>
                  <p className="mt-1 text-sm">Doctors</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-3xl font-bold text-teal-300">15</p>
                  <p className="mt-1 text-sm">Specialisations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-teal-600">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Healthcare Made Easier</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Everything you need to manage your hospital appointments in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.link} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">System Dashboards</h2>
          <p className="mt-3 text-slate-600">Select a dashboard to view its features.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dashboards.map((dashboard) => (
              <Link key={dashboard.name} href={dashboard.link} className="rounded-xl bg-white p-5 font-semibold text-blue-700 shadow-sm hover:bg-blue-700 hover:text-white">
                {dashboard.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Ready to Take Care of Your Health?</h2>
          <p className="mt-4 text-slate-600">Register today and book your next doctor appointment with ease.</p>
          <Link href="/register" className="mt-7 inline-block rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800">
            Create Your Account
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-300">
        <h2 className="text-xl font-bold text-white">MediChannel</h2>
        <p className="mt-2 text-sm">Lanka Care Hospital Channelling System</p>
        <p className="mt-4 text-xs text-slate-400">© 2026 MediChannel. All rights reserved.</p>
      </footer>
    </main>
  );
}
