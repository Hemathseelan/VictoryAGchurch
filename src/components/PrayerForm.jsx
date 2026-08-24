import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

export default function PrayerForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", request: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend / Firebase once available
    setSent(true);
    setForm({ name: "", phone: "", email: "", request: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-primary/10 bg-surface focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white shadow-soft p-8 lg:p-10 border border-primary/5" data-aos="fade-up">
      <p className="eyebrow mb-3">We're Praying With You</p>
      <h3 className="font-display text-2xl font-semibold text-primary-dark mb-8">Prayer Request Form</h3>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-ink/70 mb-2 block">Full Name</label>
          <input required name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink/70 mb-2 block">Phone Number</label>
            <input required name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91 00000 00000" />
          </div>
          <div>
            <label className="text-sm font-medium text-ink/70 mb-2 block">Email</label>
            <input required type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-ink/70 mb-2 block">Prayer Request</label>
          <textarea
            required
            name="request"
            value={form.request}
            onChange={handleChange}
            rows={5}
            className={inputClass}
            placeholder="Share what's on your heart..."
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
        >
          <FaPaperPlane size={14} /> Submit Request
        </button>

        {sent && (
          <p className="text-center text-sm text-primary font-medium bg-primary/5 rounded-xl py-3">
            Thank you — your request has been received. We are praying with you. 🙏
          </p>
        )}
      </div>
    </form>
  );
}
