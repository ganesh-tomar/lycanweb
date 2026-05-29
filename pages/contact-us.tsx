import React, { useState } from "react";
import Head from "next/head";
import { Mail, Calendar, MapPin, Send, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom Next.js Web App",
    budget: "$2,500 - $5,000",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to connect to the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Initiate the Hunt — Contact LycanWeb</title>
        <meta name="description" content="Reach out to the Lycan pack. Submit your project scope or book a direct technical blueprint call immediately." />
      </Head>

      <div className="bg-black text-white min-h-screen pt-36 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-violet-950/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header section */}
          <div className="text-center mb-20">
            <span className="text-violet-500 font-bold uppercase tracking-widest text-sm mb-3 block">
              INITIATE SECURE LINK
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6 Oswald">
              COMMENCE THE <span className="text-violet-500">HUNT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a high-growth roadmap to execute? Submit your intelligence payload below or schedule a direct blueprint call instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Direct Info & Schedulers (5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              {/* Direct Channels */}
              <div className="bg-[#060607] border border-gray-900 rounded-2xl p-8">
                <h2 className="text-sm font-black uppercase text-violet-400 tracking-wider mb-6 pb-2 border-b border-gray-900">
                  DIRECT CONTACT CHANNELS
                </h2>
                
                <div className="flex flex-col gap-6">
                  <a 
                    href="mailto:ganesh.tomar.dev@gmail.com" 
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-violet-950/20 hover:border-violet-900/30 border border-transparent transition-all"
                  >
                    <div className="p-3 bg-violet-950/40 border border-violet-900/50 rounded-lg text-violet-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-black">Secure Mail</div>
                      <div className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">
                        ganesh.tomar.dev@gmail.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-xl border border-transparent">
                    <div className="p-3 bg-violet-950/40 border border-violet-900/50 rounded-lg text-violet-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-black">HQ Location</div>
                      <div className="text-sm font-bold text-white">
                        Uttar Pradesh, India (Global operations)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Inline Widget Embed Area */}
              <div className="bg-[#060607] border border-gray-900 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-900">
                  <Calendar className="text-violet-400" size={20} />
                  <h2 className="text-sm font-black uppercase text-violet-400 tracking-wider">
                    BOOK Direct BluePrint CALL
                  </h2>
                </div>
                
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Want to skip forms entirely? Reserve a direct 15-minute engineering consult on our developer schedule immediately.
                </p>

                {/* Simulated booking CTA pointing to actual scheduling overlay / trigger */}
                <a
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-violet-700 hover:bg-violet-600 px-6 py-4 rounded-full text-xs font-semibold w-full justify-center transition-all group shadow-md shadow-violet-900/30"
                >
                  Open Booking Calendar
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Form (7 columns) */}
            <div className="lg:col-span-7 bg-[#070708] border border-gray-900 rounded-2xl p-8 lg:p-12">
              
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="inline-flex p-4 bg-violet-950/40 border border-violet-800/30 rounded-full text-violet-400 mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-black uppercase Oswald text-white mb-4">
                    PAYLOAD TRANSMITTED!
                  </h2>
                  <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed mb-8">
                    Your project intelligence has been securely sent. A Lycan engineer will review the scope and reach back within 12 hours. Prepare to run.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-violet-400 hover:text-violet-300 text-sm font-bold border border-violet-900/35 hover:bg-violet-950/20 px-6 py-3 rounded-full transition-all"
                  >
                    Send Another Payload
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-sm font-black uppercase text-violet-400 tracking-wider pb-3 border-b border-gray-900">
                    TRANSMIT PROJECT BLUEPRINT
                  </h2>

                  {errorMsg && (
                    <div className="bg-red-950/40 border border-red-500/20 text-red-200 px-4 py-3 rounded-xl text-sm">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase font-black text-gray-400 tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ganesh Tomar"
                      className="bg-[#0b0b0c] border border-gray-900 focus:border-violet-700/60 focus:ring-1 focus:ring-violet-700/35 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase font-black text-gray-400 tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ganesh@lycanweb.com"
                      className="bg-[#0b0b0c] border border-gray-900 focus:border-violet-700/60 focus:ring-1 focus:ring-violet-700/35 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>

                  {/* Two columns: Project Type + Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="text-xs uppercase font-black text-gray-400 tracking-wider">
                        Project Blueprint
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="bg-[#0b0b0c] border border-gray-900 focus:border-violet-700/60 focus:ring-1 focus:ring-violet-700/35 text-white rounded-xl px-4 py-3.5 text-sm transition-all outline-none cursor-pointer"
                      >
                        <option value="Custom Next.js Web App">Custom Next.js Web App</option>
                        <option value="SpeedTactics Optimization">SpeedTactics Optimization</option>
                        <option value="Conversion Engine Setup">Conversion Engine Setup</option>
                        <option value="Full Pack Headless System">Full Pack Headless System</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-xs uppercase font-black text-gray-400 tracking-wider">
                        Project Budget Allocation
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="bg-[#0b0b0c] border border-gray-900 focus:border-violet-700/60 focus:ring-1 focus:ring-violet-700/35 text-white rounded-xl px-4 py-3.5 text-sm transition-all outline-none cursor-pointer"
                      >
                        <option value="Under $1,500">Under $1,500</option>
                        <option value="$1,500 - $2,500">$1,500 - $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase font-black text-gray-400 tracking-wider">
                      Describe the Scope *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your goals, dynamic requirements, or slow page hurdles here..."
                      className="bg-[#0b0b0c] border border-gray-900 focus:border-violet-700/60 focus:ring-1 focus:ring-violet-700/35 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit trigger */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 text-white bg-violet-700 hover:bg-violet-600 disabled:bg-violet-900 disabled:text-gray-400 px-8 py-5.5 rounded-xl text-sm font-semibold justify-center transition-all group mt-2 shadow-xl shadow-violet-950/20"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Transmitting Payload...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Transmit Blueprint Scope
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
