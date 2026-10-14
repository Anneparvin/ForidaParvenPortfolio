"use client";
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (!status) return;

  const timer = setTimeout(() => {
    setStatus("");
  }, 3000); 
  return () => clearTimeout(timer);
}, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_email: email,
          reply_to: email,
          message: "A visitor wants to contact you through your portfolio.",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("Email sent successfully!");
      setEmail("");
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppSection id="contact">
      <div className="w-full md:w-2/3 mx-auto mb-20 md:mb-32">
        <SectionTitle
          name="Let's work together"
          className="text-center"
        />

        <SectionDescription
          content="Let's work together to bring your ideas to life with creative designs, clean code, and innovative web solutions that deliver exceptional results."
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-10"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="h-12 flex-1 min-w-0 rounded-xl border border-gray-200 px-4 outline-none focus:border-orange-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="h-12 rounded-xl bg-orange-500 px-6 font-bold text-white hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Contact me"}
          </button>
        </form>

         {status && (
      <p
        className={`mt-4 text-center text-xl font-bold ${
          status === "Email sent successfully!"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {status}
      </p>
    )}
      </div>
    </AppSection>
  );
};

export default ContactSection;

