import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/site-data";
import heroImg from "@/assets/hero-logistics.jpg";

export function ContactCta() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    freightType: "",
    load: "",
    distance: "0",
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Request Submitted Successfully!", {
        description: "Thank you for reaching out. Our operations team will contact you shortly.",
      });
      setFormData({
        freightType: "",
        load: "",
        distance: "0",
        name: "",
        phone: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#070e17] py-24 text-white sm:py-32">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img src={heroImg} alt="Logistics background" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#070e17] via-[#070e17]/95 to-[#070e17]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
          {/* Left Column: Heading, Phone & 3-Column Info Footer */}
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="text-xs font-semibold tracking-widest text-ember uppercase">
                  Submit Request
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                Reliable Supply, <br />
                Transport, or <br />
                <span className="text-ember">Farming</span> <br />
                <span className="text-ember">Solutions</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
                Contact the Evanyag team today. We are ready to serve you across Ghana and West Africa.
              </p>

              {/* Huge Direct Call Phone Number Link */}
              <div className="mt-8">
                <a
                  href={CONTACT.phoneHref}
                  className="group inline-flex items-center gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight hover:text-ember transition-colors"
                >
                  <span>{CONTACT.phone}</span>
                  <ArrowUpRight className="h-8 w-8 text-ember shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              {/* 3-Column Contact Details at Bottom */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 pt-8 border-t border-white/10">
                {/* Column 1: EMAIL */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail className="h-3.5 w-3.5 text-ember" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                      EMAIL
                    </span>
                  </div>
                  <a href={`mailto:${CONTACT.email}`} className="text-xs sm:text-sm font-bold text-white hover:text-ember transition-colors">
                    {CONTACT.email}
                  </a>
                </div>

                {/* Column 2: PHONE */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Phone className="h-3.5 w-3.5 text-ember" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                      PHONE
                    </span>
                  </div>
                  <a href={CONTACT.phoneHref} className="text-xs sm:text-sm font-bold text-white hover:text-ember transition-colors">
                    {CONTACT.altPhone}
                  </a>
                </div>

                {/* Column 3: ADDRESS */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="h-3.5 w-3.5 text-ember" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                      ADDRESS
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {CONTACT.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="border border-white/15 bg-[#09111c] p-8 sm:p-10 shadow-2xl">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-ember uppercase mb-8">
                SUBMIT REQUEST
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field 1: FREIGHT TYPE */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                    FREIGHT TYPE
                  </label>
                  <select
                    value={formData.freightType}
                    onChange={(e) => setFormData({ ...formData, freightType: e.target.value })}
                    className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white focus:border-ember focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#09111c] text-white">Select</option>
                    <option value="Haulage & Transport" className="bg-[#09111c] text-white">Heavy Haulage &amp; Transport</option>
                    <option value="Cold Store Supply" className="bg-[#09111c] text-white">Frozen Food Distribution</option>
                    <option value="Agriculture & Farming" className="bg-[#09111c] text-white">Agricultural Produce &amp; Farming</option>
                    <option value="Mining Logistics" className="bg-[#09111c] text-white">Mining Equipment Logistics</option>
                  </select>
                </div>

                {/* Field 2 & 3: LOAD & DIST (MILES) */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                      LOAD
                    </label>
                    <select
                      value={formData.load}
                      onChange={(e) => setFormData({ ...formData, load: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white focus:border-ember focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#09111c] text-white">Select</option>
                      <option value="Full Load" className="bg-[#09111c] text-white">Full Container Load</option>
                      <option value="Partial Load" className="bg-[#09111c] text-white">Partial Freight</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                      DIST (MILES)
                    </label>
                    <input
                      type="number"
                      value={formData.distance}
                      onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white focus:border-ember focus:outline-none"
                    />
                  </div>
                </div>

                {/* Field 4: YOUR NAME */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white focus:border-ember focus:outline-none"
                  />
                </div>

                {/* Field 5: PHONE NUMBER */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white focus:border-ember focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-ember py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-ember-deep disabled:opacity-50"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT REQUEST"}
                  </button>
                  <p className="mt-3 text-[10px] text-slate-500 text-center">
                    By clicking on <span className="font-bold text-slate-400">this button</span>, I agree to the processing.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
