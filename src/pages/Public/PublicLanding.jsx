// src/pages/Public/PublicLanding.jsx

import { Link } from "react-router-dom";
import {
  Smartphone,
  Wrench,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
  Star,
} from "lucide-react";

export default function PublicLanding() {
  const phone = "919876543210";

  const whatsapp = `https://wa.me/${phone}`;

  const maps = "https://maps.google.com/?q=Krishna+Mobiles+Mithapur+Bihar";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* ================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================= */}

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-[180px]" />

        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#071019] to-black" />
      </div>

      {/* ================================= */}
      {/* NAVBAR */}
      {/* ================================= */}

      <nav
        className="
fixed
top-0
left-0
right-0
z-50

backdrop-blur-xl

bg-white/5

border-b

border-white/10
"
      >
        <div
          className="
max-w-7xl

mx-auto

h-[72px]

px-6

flex

items-center

justify-between
"
        >
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <div
              className="
w-12

h-12

rounded-2xl

bg-gradient-to-br

from-cyan-400

to-blue-600

flex

items-center

justify-center

shadow-xl
"
            >
              <Smartphone size={26} />
            </div>

            <div>
              <h1 className="font-bold text-xl">Krishna Mobiles</h1>

              <p className="text-xs text-white/50">
                Sales • Repair • Accessories
              </p>
            </div>
          </div>

          {/* CENTER */}

          <div className="hidden md:flex gap-10">
            <a href="#services" className="hover:text-cyan-300 transition">
              Services
            </a>

            <a href="#repair" className="hover:text-cyan-300 transition">
              Track Repair
            </a>

            <a href="#reviews" className="hover:text-cyan-300 transition">
              Reviews
            </a>

            <a href="#contact" className="hover:text-cyan-300 transition">
              Contact
            </a>
          </div>

          {/* RIGHT */}

          <Link
            to="/auth/login"
            className="
px-5

py-2.5

rounded-full

border

border-white/20

hover:bg-white/10

transition
"
          >
            Employee Login
          </Link>
        </div>
      </nav>

      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section
        className="
min-h-screen

flex

items-center

justify-center

relative

px-6
"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div>
            <div
              className="
inline-flex

items-center

gap-2

px-5

py-2

rounded-full

bg-white/5

border

border-white/10
"
            >
              <Star size={16} className="fill-yellow-400 text-yellow-400" />

              <span className="text-sm">4.8 Google Rating</span>
            </div>

            <h1
              className="
text-6xl

md:text-8xl

font-black

leading-none

mt-8
"
            >
              Mobile
              <br />
              <span
                className="
bg-gradient-to-r

from-cyan-400

to-blue-500

bg-clip-text

text-transparent
"
              >
                Repair
              </span>
              <br />
              Reimagined
            </h1>

            <p
              className="
text-white/60

text-xl

leading-9

mt-8

max-w-xl
"
            >
              Premium Mobile Repair, Inventory, Accessories & Customer Services.
              Trusted by thousands of customers across Bihar.
            </p>

            {/* STATS */}

            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-4xl font-bold">15K+</h3>

                <p className="text-white/50">Repairs</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">8+</h3>

                <p className="text-white/50">Years</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">30min</h3>

                <p className="text-white/50">Diagnosis</p>
              </div>
            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                to="/services"
                className="
px-8

py-4

rounded-full

bg-gradient-to-r

from-cyan-400

to-blue-600

font-bold

text-lg

text-black

hover:scale-105

transition

shadow-2xl
"
              >
                Explore Services
              </Link>

              <Link
                to="/track-repair"
                className="
px-8

py-4

rounded-full

border

border-white/20

hover:bg-white/10

transition

font-semibold
"
              >
                Track Repair
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div
              className="
absolute

inset-0

rounded-[60px]

bg-gradient-to-r

from-cyan-500/20

to-blue-500/20

blur-3xl
"
            />

            <div
              className="
relative

rounded-[40px]

border

border-white/10

bg-white/5

backdrop-blur-2xl

p-10

shadow-[0_25px_100px_rgba(0,0,0,0.6)]
"
            >
              <div className="flex justify-center">
                <div
                  className="
w-[220px]

h-[420px]

rounded-[50px]

border-[10px]

border-black

bg-gradient-to-br

from-slate-900

to-slate-700

shadow-2xl

flex

items-center

justify-center
"
                >
                  <Smartphone size={110} className="text-cyan-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div
                  className="
p-5

rounded-3xl

bg-white/5

border

border-white/10
"
                >
                  <Wrench className="text-cyan-400" size={34} />

                  <h3 className="mt-4 font-bold">Fast Repair</h3>

                  <p className="text-sm text-white/50 mt-2">
                    Screen, Battery, Camera & Water Damage
                  </p>
                </div>

                <div
                  className="
p-5

rounded-3xl

bg-white/5

border

border-white/10
"
                >
                  <Smartphone className="text-cyan-400" size={34} />

                  <h3 className="mt-4 font-bold">Accessories</h3>

                  <p className="text-sm text-white/50 mt-2">
                    Charger, Cover, Earbuds and More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* FLOATING BUTTONS */}
      {/* ================================= */}

      <div
        className="
fixed

bottom-8

right-8

z-50

flex

flex-col

gap-4
"
      >
        <a
          href={`tel:${phone}`}
          className="
w-16

h-16

rounded-full

bg-blue-600

flex

items-center

justify-center

shadow-2xl

hover:scale-110

transition
"
        >
          <Phone size={28} />
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="
w-16

h-16

rounded-full

bg-green-500

flex

items-center

justify-center

shadow-2xl

hover:scale-110

transition
"
        >
          <MessageCircle size={28} />
        </a>

        <a
          href={maps}
          target="_blank"
          rel="noreferrer"
          className="
w-16

h-16

rounded-full

bg-red-500

flex

items-center

justify-center

shadow-2xl

hover:scale-110

transition
"
        >
          <MapPin size={28} />
        </a>
      </div>

      {/* ================================= */}
      {/* SERVICES */}
      {/* ================================= */}

      <section
        id="services"
        className="
py-32

px-6

max-w-7xl

mx-auto
"
      >
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
            SERVICES
          </p>

          <h2 className="text-5xl font-black mt-5">
            Everything Your Phone Needs
          </h2>

          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            Fast repairs, genuine accessories, IMEI verification and customer
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: "📱",
              title: "Screen Replacement",
            },

            {
              icon: "🔋",
              title: "Battery Replacement",
            },

            {
              icon: "💧",
              title: "Water Damage Repair",
            },

            {
              icon: "🔐",
              title: "IMEI Verification",
            },

            {
              icon: "🎧",
              title: "Accessories",
            },

            {
              icon: "♻️",
              title: "Exchange & Buyback",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="
p-10

rounded-[40px]

bg-white/5

backdrop-blur-xl

border

border-white/10

hover:border-cyan-400/50

hover:-translate-y-3

transition

shadow-xl
"
            >
              <div className="text-6xl">{s.icon}</div>

              <h3 className="text-2xl font-bold mt-6">{s.title}</h3>

              <p className="text-white/50 mt-4">
                Professional service by experienced technicians.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================= */}
      {/* TRUST */}
      {/* ================================= */}

      <section
        className="
py-28

bg-white/5

backdrop-blur-xl

border-y

border-white/10
"
      >
        <div
          className="
max-w-7xl

mx-auto

grid

grid-cols-2

md:grid-cols-4

gap-12

text-center
"
        >
          <div>
            <h2 className="text-6xl font-black text-cyan-400">15K+</h2>

            <p className="text-white/50 mt-3">Repairs Completed</p>
          </div>

          <div>
            <h2 className="text-6xl font-black text-cyan-400">8+</h2>

            <p className="text-white/50 mt-3">Years Experience</p>
          </div>

          <div>
            <h2 className="text-6xl font-black text-cyan-400">4.8★</h2>

            <p className="text-white/50 mt-3">Google Rating</p>
          </div>

          <div>
            <h2 className="text-6xl font-black text-cyan-400">30min</h2>

            <p className="text-white/50 mt-3">Quick Diagnosis</p>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* TESTIMONIALS */}
      {/* ================================= */}

      <section
        id="reviews"
        className="
py-32

px-6
"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl font-black mt-5">Loved By Customers</h2>

          <p className="text-white/50 mt-5">
            Trusted by thousands across Bihar.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                name: "Rahul Kumar",

                city: "Patna",

                review:
                  "My iPhone screen was replaced within 40 minutes. Amazing service.",
              },

              {
                name: "Priya Singh",

                city: "Mithapur",

                review: "Very professional staff and genuine accessories.",
              },

              {
                name: "Anjali Kumari",

                city: "Patna",

                review: "Repair status tracking is fantastic.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
p-10

rounded-[40px]

bg-white/5

border

border-white/10

backdrop-blur-xl

hover:-translate-y-3

transition
"
              >
                <div className="flex justify-center">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      className="
fill-yellow-400

text-yellow-400
"
                    />
                  ))}
                </div>

                <p
                  className="
mt-8

text-lg

italic

text-white/80

leading-9
"
                >
                  "{item.review}"
                </p>

                <h3 className="mt-8 text-xl font-bold">{item.name}</h3>

                <p className="text-white/40">{item.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* GALLERY */}
      {/* ================================= */}

      <section
        className="
py-32

px-6

bg-white/5

border-y

border-white/10
"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
            GALLERY
          </p>

          <h2 className="text-5xl font-black mt-5">Inside Krishna Mobiles</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="
aspect-[4/3]

rounded-[40px]

bg-gradient-to-br

from-slate-800

to-slate-900

border

border-white/10

flex

items-center

justify-center

hover:scale-[1.03]

transition

overflow-hidden
"
              >
                <div className="text-center">
                  <Smartphone size={70} className="mx-auto text-cyan-400" />

                  <p className="mt-5 text-white/50">Store Image {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* CTA SECTION */}
      {/* ================================= */}

      <section className="py-32 px-6">
        <div
          className="
max-w-5xl

mx-auto

text-center

rounded-[50px]

p-20

bg-gradient-to-r

from-cyan-500/10

to-blue-500/10

border

border-cyan-400/20

backdrop-blur-2xl
"
        >
          <h2 className="text-6xl font-black">Need Mobile Repair?</h2>

          <p className="text-white/50 mt-6 text-xl">
            Fast • Genuine Parts • Trusted Service
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <a
              href={`tel:${phone}`}
              className="
px-8

py-4

rounded-full

bg-blue-600

font-bold

hover:scale-105

transition
"
            >
              Call Now
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="
px-8

py-4

rounded-full

bg-green-500

font-bold

hover:scale-105

transition
"
            >
              WhatsApp
            </a>

            <a
              href={maps}
              target="_blank"
              rel="noreferrer"
              className="
px-8

py-4

rounded-full

bg-red-500

font-bold

hover:scale-105

transition
"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* FOOTER */}
      {/* ================================= */}

      <footer
        id="contact"
        className="
bg-black

border-t

border-white/10

py-20

px-6
"
      >
        <div
          className="
max-w-7xl

mx-auto

grid

md:grid-cols-3

gap-12
"
        >
          <div>
            <h2 className="text-3xl font-black">Krishna Mobiles</h2>

            <p className="text-white/50 mt-5 leading-8">
              Premium Mobile Repair, Accessories and Customer Service. Trusted
              across Bihar.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Quick Links</h3>

            <div className="mt-5 space-y-3 text-white/60">
              <p>Services</p>

              <p>Track Repair</p>

              <p>Reviews</p>

              <p>Employee Login</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl">Contact</h3>

            <div className="mt-5 space-y-4 text-white/60">
              <p>📞 +91 9876543210</p>

              <p>📍 Mithapur, Bihar</p>

              <p>🕒 Open : 9 AM - 9 PM</p>
            </div>
          </div>
        </div>

        <div
          className="
mt-16

pt-8

border-t

border-white/10

text-center

text-white/30
"
        >
          © 2026 Krishna Mobiles
          <br />
          Powered by SyncWare Mobile ERP
        </div>
      </footer>
      {/* ================================= */}
      {/* TRACK REPAIR */}
      {/* ================================= */}

      <section
        id="repair"
        className="
py-36

px-6
"
      >
        <div
          className="
max-w-5xl

mx-auto

text-center

rounded-[50px]

p-16

bg-gradient-to-br

from-cyan-500/10

to-blue-500/10

border

border-white/10

backdrop-blur-2xl
"
        >
          <h2 className="text-5xl font-black">Track Your Repair</h2>

          <p className="text-white/50 mt-6">Enter Job ID or Mobile Number</p>

          <div
            className="
max-w-3xl

mx-auto

mt-12

flex

flex-col

md:flex-row

gap-4
"
          >
            <input
              type="text"
              placeholder="JOB-2026-00045"
              className="
flex-1

px-8

py-5

rounded-full

bg-white/5

border

border-white/10

outline-none

focus:border-cyan-400
"
            />

            <button
              className="
px-10

py-5

rounded-full

bg-gradient-to-r

from-cyan-400

to-blue-600

font-bold

text-black

hover:scale-105

transition
"
            >
              Track Now
            </button>
          </div>

          {/* Dummy Status */}

          <div
            className="
mt-16

max-w-xl

mx-auto

rounded-[30px]

bg-white/5

border

border-white/10

p-8
"
          >
            <p className="text-sm text-white/50">Device</p>

            <h3 className="text-2xl font-bold mt-2">
              Samsung Galaxy S24 Ultra
            </h3>

            <div className="mt-8">
              <p className="text-sm text-white/50">Status</p>

              <div
                className="
inline-flex

mt-3

px-6

py-3

rounded-full

bg-green-500/20

text-green-400

font-bold
"
              >
                Ready For Pickup
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SCROLL */}

      <div
        className="
absolute

bottom-10

left-1/2

-transform

-translate-x-1/2

text-white/40

animate-bounce
"
      >
        Scroll
        <ChevronRight className="rotate-90 mx-auto" size={20} />
      </div>
    </div>
  );
}
