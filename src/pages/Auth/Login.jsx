import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Smartphone, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",

    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",

        {
          email: form.email,

          password: form.password,
        },
      );

      const data = res.data;

      console.log(data);

      /*
      Expected response

      {

        accessToken,

        user,

        business,

        role,

        permissions

      }

      */

      localStorage.setItem(
        "accessToken",

        data.accessToken,
      );

      localStorage.setItem(
        "businessId",

        data.business.id,
      );

      localStorage.setItem(
        "tenant_context",

        JSON.stringify({
          user: data.user,

          business: data.business,

          role: data.role,

          permissions: data.permissions,
        }),
      );

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      setError(err?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
min-h-screen

bg-gradient-to-br

from-slate-950

via-slate-900

to-slate-950

flex

items-center

justify-center

px-6

relative

overflow-hidden
"
    >
      {/* Glow */}

      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Card */}

      <div
        className="
w-full

max-w-md

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-[32px]

shadow-[0_20px_80px_rgba(0,0,0,0.45)]

overflow-hidden
"
      >
        {/* TOP */}

        <div className="text-center p-10">
          <div
            className="
mx-auto

w-20

h-20

rounded-full

bg-gradient-to-r

from-cyan-500

to-blue-600

flex

items-center

justify-center
"
          >
            <Smartphone size={36} className="text-white" />
          </div>

          <h1 className="text-4xl font-black text-white mt-6">
            Employee Login
          </h1>

          <p className="text-white/60 mt-3">
            Secure access to your Mobile Shop Dashboard
          </p>
        </div>

        {/* FORM */}

        <form onSubmit={login} className="px-10 pb-10 space-y-6">
          <div>
            <label className="text-sm text-white/70">Email</label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="
absolute

left-4

top-1/2

-translate-y-1/2

text-white/50
"
              />

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="employee@shop.com"
                className="
w-full

pl-12

pr-4

py-4

rounded-2xl

bg-white/10

text-white

border

border-white/10

outline-none

focus:border-cyan-500
"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-white/70">Password</label>

            <div className="relative mt-2">
              <Lock
                size={18}
                className="
absolute

left-4

top-1/2

-translate-y-1/2

text-white/50
"
              />

              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="
w-full

pl-12

pr-4

py-4

rounded-2xl

bg-white/10

text-white

border

border-white/10

outline-none

focus:border-cyan-500
"
              />
            </div>
          </div>

          {error && (
            <div
              className="
p-4

rounded-xl

bg-red-500/20

text-red-300

text-sm
"
            >
              {error}
            </div>
          )}

          <button
            disabled={loading}
            className="
w-full

py-4

rounded-2xl

font-bold

text-white

bg-gradient-to-r

from-cyan-500

to-blue-600

hover:scale-[1.02]

transition

disabled:opacity-50
"
          >
            {loading ? (
              "Signing In..."
            ) : (
              <>
                Login
                <ArrowRight className="inline ml-2" size={18} />
              </>
            )}
          </button>

          <div
            className="
flex

items-center

justify-center

gap-2

text-white/50

text-sm
"
          >
            <ShieldCheck size={16} />
            RBAC Protected Access
          </div>
        </form>
      </div>
    </div>
  );
}
