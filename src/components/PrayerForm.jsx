import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa6";

export default function PrayerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    request: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone - numbers only, maximum 10 digits
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setForm({
        ...form,
        phone: onlyNumbers,
      });

      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (form.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Email validation only if user entered email
    if (
      form.email.trim() !== "" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prayer request validation
    if (form.request.trim() === "") {
      alert("Please enter your prayer request.");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          request: form.request,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        request: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
  console.error("EmailJS Error:", error);
  console.error("Status:", error.status);
  console.error("Text:", error.text);

  alert(`Email failed: ${error.text || "Unknown error"}`);
}finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-primary/10 bg-surface focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white shadow-soft p-8 lg:p-10 border border-primary/5"
      data-aos="fade-up"
    >
      <p className="eyebrow mb-3">We're Praying With You</p>

      <h3 className="font-display text-2xl font-semibold text-primary-dark mb-8">
        Prayer Request Form
      </h3>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-ink/70 mb-2 block">
            Full Name
          </label>

          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        {/* Phone + Email */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-ink/70 mb-2 block">
              Phone Number
            </label>

            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={10}
              pattern="[0-9]{10}"
              className={inputClass}
              placeholder="10 digit phone number"
            />
          </div>

          {/* Email - Optional */}
          <div>
            <label className="text-sm font-medium text-ink/70 mb-2 block">
              Email <span className="text-ink/40">(Optional)</span>
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Prayer Request */}
        <div>
          <label className="text-sm font-medium text-ink/70 mb-2 block">
            Prayer Request
          </label>

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

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FaPaperPlane size={14} />

          {sending ? "Sending..." : "Submit Request"}
        </button>

        {/* Success Message */}
        {sent && (
          <p className="text-center text-sm text-primary font-medium bg-primary/5 rounded-xl py-3">
            Thank you — your request has been received. We are praying with
            you. 🙏
          </p>
        )}
      </div>
    </form>
  );
}