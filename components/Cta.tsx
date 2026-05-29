/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/FinalCTA.tsx
"use client";
import { useState } from "react";
import Button from "./Button";
import { Loader2 } from "lucide-react";

export default function FinalCTA({ data }: { data?: any }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const title = data?.title || "UNLEASH YOUR DIGITAL <span>EMPIRE</span>";
  const subtitle = data?.subtitle || "Ready to outpace the competition? Establish secure links with the pack.";
  const buttonText = data?.button?.buttonText || "Join the Hunt";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/xdajjnnp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          _subject: "🐺 New Lycan Lead from Final CTA!",
          message: "A user submitted their email for onboarding from the Final CTA banner on LycanWeb."
        })
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        const responseData = await res.json();
        setErrorMsg(responseData.error || "Something went wrong. Please check your email and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to connect to the email server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const triggerBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-booking-modal"));
    }
  };

  return (
    <section className="cta py-32 bg-linear-to-t from-violet-950/30 to-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-5xl md:text-7xl Oswald font-black mb-8 uppercase tracking-tight [&_span]:text-violet-500 [&_span]:font-extrabold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-350 mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {errorMsg && (
          <div className="max-w-xl mx-auto bg-red-950/40 border border-red-500/20 text-red-200 px-6 py-3 rounded-full text-sm mb-6 select-none">
            ⚠️ {errorMsg}
          </div>
        )}

        {success ? (
          <div className="max-w-xl mx-auto bg-[#070708] border border-violet-900/40 rounded-3xl p-8 backdrop-blur-md shadow-2xl shadow-violet-950/15 select-none">
            <span className="text-4xl mb-4 block">🐺</span>
            <h3 className="text-2xl font-black text-white mb-2 uppercase Oswald tracking-wide">
              BEACON ESTABLISHED!
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your email has been securely transmitted. A pack engineer will establish contact and dispatch onboarding blueprints within 12 hours. Prepare to run.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="text-xs font-black uppercase text-violet-400 hover:text-violet-300 border border-violet-900/30 hover:bg-violet-950/20 px-6 py-2.5 rounded-full transition-all cursor-pointer"
            >
              Dispatch New Beacon
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-4 select-none"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to summon the pack"
              required
              disabled={loading}
              className="flex-1 px-6 py-5 bg-black border border-violet-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-full text-white placeholder-gray-500 focus:outline-none transition-all text-base outline-none"
            />
            <Button type="submit" variant="primary" disabled={loading} className="gap-2">
              {loading ? (
                <>
                  <Loader2 className="animate-spin animate-duration-1000" size={18} />
                  Summoning...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </form>
        )}

        <p className="mt-8 text-sm text-gray-500 select-none font-sans">
          Schedule a direct engineering consult instead?{" "}
          <button
            onClick={triggerBooking}
            className="text-violet-400 hover:text-violet-300 font-semibold hover:underline bg-transparent border-0 p-0 inline cursor-pointer outline-none"
          >
            Book now →
          </button>
        </p>
      </div>
    </section>
  );
}

