import {
  ArrowRight,
  MapPin,
  Sparkles,
  ClipboardList,
  BrainCircuit,
  Clock3,
  Camera,
  CheckCircle2,
  Zap,
  Droplets,
  Wifi,
  Trash2,
  Wrench,
  ShieldCheck,
  Building2,
  ChevronRight,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-surface text-brand-900">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 px-6 py-4 backdrop-blur-md lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
              <MapPin size={22} />
            </div>

            <span className="text-xl font-bold tracking-tight text-brand-950">
              FixMyCampus<span className="text-brand-500">AI</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-brand-500"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-brand-500"
            >
              How it works
            </a>

            <a
              href="#issues"
              className="text-sm font-medium text-slate-600 transition hover:text-brand-500"
            >
              Issues
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-brand-500"
            >
              About
            </a>
          </div>

          {/* Navbar Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium transition hover:text-brand-500 sm:block"
            >
              Log in
            </a>

            <a
              href="#get-started"
              className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="overflow-hidden px-6 py-20 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-brand-500">
              <Sparkles size={16} />
              AI-Powered Campus Maintenance
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-brand-950 md:text-6xl lg:text-7xl">
              Your campus.
              <br />
              Your voice.
              <br />
              <span className="text-brand-500">Real solutions.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Report campus problems in seconds. Let AI connect your reports to
              the right people and help transform your campus into a better
              place to live, learn and thrive.
            </p>

            {/* Hero Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-100 transition hover:bg-brand-400"
              >
                Report an Issue
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-brand-900 transition hover:bg-slate-50"
              >
                How it works
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-bold text-blue-700">
                  S
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm font-bold text-emerald-700">
                  A
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-sm font-bold text-amber-700">
                  M
                </div>
              </div>

              <p className="text-sm text-slate-600">
                <span className="font-semibold text-brand-900">
                  Students & administrators
                </span>
                <br />
                working together for a better campus
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-teal-100 blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-2xl shadow-slate-200">
              <img
                src="/hero.png"
                alt="Student reporting a campus maintenance problem"
                className="h-[420px] w-full rounded-2xl object-cover"
              />

              {/* Floating Success Card */}
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white p-4 shadow-xl sm:left-8 sm:right-auto">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={26} />
                  </div>

                  <div>
                    <p className="font-semibold text-brand-900">
                      Report Successfully Tracked
                    </p>

                    <p className="text-sm text-slate-500">
                      AI assigned to Maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="bg-white px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              WHY FIXMYCAMPUS AI
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 md:text-4xl">
              Built to make campus life better
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Smarter reporting, intelligent prioritization and better
              communication between students and campus management.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-100 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-brand-500">
                <BrainCircuit size={28} />
              </div>

              <h3 className="text-xl font-bold text-brand-950">
                AI-Powered Reports
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                AI analyzes submitted reports, identifies problems,
                categorizes issues and recommends the right department.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-100 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <MapPin size={28} />
              </div>

              <h3 className="text-xl font-bold text-brand-950">
                Location Tracking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Pinpoint campus problems on a map so maintenance teams
                know exactly where attention is needed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-100 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <Zap size={28} />
              </div>

              <h3 className="text-xl font-bold text-brand-950">
                Smart Prioritization
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Critical problems are identified and prioritized to help
                campus teams respond to urgent issues faster.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-slate-100 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                <Clock3 size={28} />
              </div>

              <h3 className="text-xl font-bold text-brand-950">
                Status Updates
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Follow the progress of submitted issues and stay informed
                as they move from submission to resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="bg-surface px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              SIMPLE PROCESS
            </span>

            <h2 className="mt-3 text-3xl font-bold text-brand-950 md:text-4xl">
              From problem to solution
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Reporting campus problems shouldn't be complicated.
              We've made it simple.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-brand-500">
                <Camera size={30} />
              </div>

              <span className="text-sm font-bold tracking-widest text-brand-500">
                STEP 01
              </span>

              <h3 className="mt-3 text-2xl font-bold text-brand-950">
                Report the problem
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Take a photo, describe the problem and indicate where
                it happened on campus.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-500">
                Easy submissions
                <ChevronRight size={16} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <BrainCircuit size={30} />
              </div>

              <span className="text-sm font-bold tracking-widest text-brand-500">
                STEP 02
              </span>

              <h3 className="mt-3 text-2xl font-bold text-brand-950">
                AI analyzes it
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Our AI evaluates the report, identifies the issue,
                assesses its urgency and recommends the appropriate team.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-500">
                Intelligent processing
                <ChevronRight size={16} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <CheckCircle2 size={30} />
              </div>

              <span className="text-sm font-bold tracking-widest text-brand-500">
                STEP 03
              </span>

              <h3 className="mt-3 text-2xl font-bold text-brand-950">
                Track the solution
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The appropriate department handles the problem while
                you monitor its progress until it is resolved.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-500">
                Transparent progress
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ISSUE CATEGORIES ================= */}
      <section id="issues" className="bg-white px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              CAMPUS ISSUES
            </span>

            <h2 className="mt-3 text-3xl font-bold text-brand-950 md:text-4xl">
              One platform. Every campus problem.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              From broken facilities to connectivity issues,
              report the problems affecting your campus experience.
            </p>
          </div>

          {/* Categories */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Category 1 */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-100 p-6 transition hover:border-brand-500 hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Zap size={26} />
              </div>

              <div>
                <h3 className="font-bold text-brand-950">Electrical</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Faulty wiring, lights and power outages
                </p>
              </div>
            </div>

            {/* Category 2 */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-100 p-6 transition hover:border-brand-500 hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Droplets size={26} />
              </div>

              <div>
                <h3 className="font-bold text-brand-950">Plumbing</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Leaking pipes, broken taps and water issues
                </p>
              </div>
            </div>

            {/* Category 3 */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-100 p-6 transition hover:border-brand-500 hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Wifi size={26} />
              </div>

              <div>
                <h3 className="font-bold text-brand-950">Internet & Wi-Fi</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Network connectivity and access issues
                </p>
              </div>
            </div>

            {/* Category 4 */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-100 p-6 transition hover:border-brand-500 hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Trash2 size={26} />
              </div>

              <div>
                <h3 className="font-bold text-brand-950">Sanitation</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Waste disposal and environmental cleanliness
                </p>
              </div>
            </div>

            {/* Category 5 */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-100 p-6 transition hover:border-brand-500 hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                <ShieldCheck size={26} />
              </div>

              <div>
                <h3 className="font-bold text-brand-950">Safety</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Hazards and unsafe campus conditions
                </p>
              </div>
            </div>

            {/* Category 6 */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-100 p-6 transition hover:border-brand-500 hover:shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Wrench size={26} />
              </div>

              <div>
                <h3 className="font-bold text-brand-950">Infrastructure</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Damaged buildings, furniture and facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="bg-brand-950 px-6 py-20 text-white lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Impact Text */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-teal-300">
                OUR VISION
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                A better campus starts with a single report.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                We believe every student deserves a campus where problems
                are heard, facilities are maintained and communities
                actively participate in making things better.
              </p>

              <a
                href="#get-started"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-400"
              >
                Make your voice heard
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <BrainCircuit size={28} className="text-teal-300" />

                <h3 className="mt-4 text-xl font-bold">
                  AI-Assisted
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Smarter complaint classification and routing.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Clock3 size={28} className="text-teal-300" />

                <h3 className="mt-4 text-xl font-bold">
                  Faster Response
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Helping departments identify critical issues.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <MapPin size={28} className="text-teal-300" />

                <h3 className="mt-4 text-xl font-bold">
                  Location Aware
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Reports connected to campus locations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <ShieldCheck size={28} className="text-teal-300" />

                <h3 className="mt-4 text-xl font-bold">
                  Transparent
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Clearer issue tracking and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section id="get-started" className="bg-surface px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-500 px-8 py-16 text-center text-white shadow-xl md:px-16">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Building2 size={32} />
          </div>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's build a better campus together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-50">
            Your report could be the difference between a problem
            ignored and a problem solved. Join the movement for
            smarter campus management.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-500 transition hover:bg-teal-50"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="about" className="bg-brand-950 px-6 py-12 text-white lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* Footer Brand */}
            <div>
              <a href="#" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500">
                  <MapPin size={22} />
                </div>

                <span className="text-xl font-bold">
                  FixMyCampus<span className="text-teal-300">AI</span>
                </span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                Making campus communities smarter, safer and better
                through AI-powered reporting and maintenance management.
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>

              <a href="#how-it-works" className="transition hover:text-white">
                How it works
              </a>

              <a href="#issues" className="transition hover:text-white">
                Issues
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} FixMyCampus AI. Built for
              smarter campus communities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;