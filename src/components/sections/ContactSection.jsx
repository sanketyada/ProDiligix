import React, { useState, useRef } from "react";
import { Clock, Zap } from "lucide-react";
import emailjs from "@emailjs/browser";

const countries = [
  { code: "+91", emoji: "🇮🇳", name: "India" },
  { code: "+1", emoji: "🇺🇸", name: "USA" },
  { code: "+44", emoji: "🇬🇧", name: "UK" },
  { code: "+971", emoji: "🇦🇪", name: "United Arab Emirates" },
  { code: "+7", emoji: "🇷🇺", name: "Russia" },
  { code: "+977", emoji: "🇳🇵", name: "Nepal" },
  { code: "+975", emoji: "🇧🇹", name: "Bhutan" },
  { code: "+966", emoji: "🇸🇦", name: "Saudi Arabia" },
];

export default function ContactSection() {
  const form = useRef();
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    industry: "",
    otherIndustry: "",
    name: "",
    company: "",
    email: "",
    countryCode: "+91",
    phone: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "industry" && value !== "other") {
      setFormData((prev) => ({
        ...prev,
        otherIndustry: "",
      }));
    }
  };

  // EmailJS Submit Function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8blplvv", "template_bgwjwn8", form.current, {
        publicKey: "aVAj7LjvESyZtrZ42",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setToast({
            type: "success",
            message: "Email Sent Successfully!",
          });

          // Auto-hide toast after 3 seconds
          setTimeout(() => setToast(null), 3000);

          setFormData({
            industry: "",
            otherIndustry: "",
            name: "",
            company: "",
            email: "",
            countryCode: "+91",
            phone: "",
            requirement: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);

          setToast({
            type: "error",
            message: "Email Failed! Try Again.",
          });

          // Auto-hide toast after 3 seconds
          setTimeout(() => setToast(null), 3000);
        }
      );
  };

  return (
    <div className="bg-slate-800 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            ProDiligix – The Ultimate Platform for Indirect Procurement
          </h1>

          <p className="text-white text-base md:text-lg">
            Enhancing business efficiency with innovative, seamless, and
            cost-optimized solutions. Partnering with you from Sourcing to
            Delivery.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-red-50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">2-5x Faster</p>
                <p className="text-sm text-slate-600">Turn Around</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-purple-50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">24x7 Realtime</p>
                <p className="text-sm text-slate-600">Visibility</p>
              </div>
            </div>
          </div>

          <p className="text-white text-sm max-w-md mx-auto lg:mx-0">
            By submitting this form, you agree that ProDiligix may contact you
            regarding our products, services, events, and other information you
            request.
          </p>
        </div>

        {/* Right Section — Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-5"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center md:text-left">
            Get In Touch With Us
          </h2>

          {/* Company Name* */}
          <input
            type="text"
            name="company"
            placeholder="Company Name*"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Select Industry Solutions* */}
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-gray-700"
            required
          >
            <option value="">Select Industry Solutions*</option>
            <option value="IT Industry">IT Industry</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="eCommerce">eCommerce</option>
            <option value="FMCG">FMCG</option>
            <option value="Service Sector">Service Sector</option>
            <option value="other">Other</option>
          </select>

          {formData.industry === "other" && (
            <input
              type="text"
              name="otherIndustry"
              placeholder="Please specify your industry*"
              value={formData.otherIndustry}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          )}

          {/* Your Name* */}
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Work Email* */}
          <input
            type="email"
            name="email"
            placeholder="Work Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Phone */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              required
              className="w-28 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-gray-700"
              value={formData.countryCode}
              onChange={handleChange}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.emoji} {c.code}
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Requirement */}
          <textarea
            name="requirement"
            placeholder="Sourcing requirement*"
            value={formData.requirement}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2D5DD5] hover:bg-[#253F83] text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
      {toast && (
        <div
          className={`fixed bottom-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white
      ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
      animate-slide-up`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
