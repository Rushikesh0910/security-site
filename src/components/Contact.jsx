import React, { useState } from "react";

const Contact = () => {
  // 1. Added State to make the form functional
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Security Guards",
  });

  const [buttonStatus, setButtonStatus] = useState("Request a Call Back");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Automatically formats a message since this UI doesn't have a message box
        body: JSON.stringify({
          ...formData,
          message: `Please call me back regarding ${formData.service}.`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setButtonStatus("✅ Request Sent!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "Security Guards",
        });
        setTimeout(() => setButtonStatus("Request a Call Back"), 3000);
      } else {
        setButtonStatus("❌ Error. Try Again.");
        setTimeout(() => setButtonStatus("Request a Call Back"), 3000);
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      setButtonStatus("❌ Server Offline");
      setTimeout(() => setButtonStatus("Request a Call Back"), 3000);
    }
  };

  return (
    <div className="bg-brand-charcoal text-white pt-20 pb-20 border-t-4 border-brand-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
              Get In Touch
            </h2>
            <h3 className="text-3xl font-extrabold mb-6">
              Ready to Secure Your Assets?
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Contact JMD Security today. With our headquarters in Vapi and
              branch offices across India, our experts are ready to assist you
              nationwide.
            </p>

            <div className="space-y-6">
              <div className="flex items-start hover:text-brand-accent transition-colors cursor-pointer">
                <svg
                  className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <span className="block text-gray-300 font-medium">
                    +91 93751 01111{" "}
                    <span className="text-brand-accent text-sm ml-1">
                      (Client Inquiries)
                    </span>
                  </span>
                  <span className="block text-gray-300 font-medium mt-2">
                    +91 93283 48511{" "}
                    <span className="text-brand-accent text-sm ml-1">
                      (HR & Careers)
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex items-center hover:text-brand-accent transition-colors cursor-pointer">
                <svg
                  className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300 font-medium break-all">
                  ajeet.jmdsecurityservices@gmail.com
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300 font-medium leading-relaxed">
                  HQ: SF-205 (2nd Floor), Arihant Complex, Beside Vishal
                  Megamart, GIDC, Vapi, Valsad, Gujarat - 396195
                </span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="bg-brand-navy p-8 rounded-xl shadow-2xl"
          >
            {/* Added onSubmit handler here */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-charcoal border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    autoComplete="tel"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    minLength="10"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full bg-brand-charcoal border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    autoComplete="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-charcoal border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Type of Service Needed *
                </label>
                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="Security Guards">Security Guards</option>
                    <option value="House Keeping Services">
                      House Keeping Services
                    </option>
                    <option value="Manpower Services">Manpower Services</option>
                    <option value="HR Consultancy">HR Consultancy</option>
                    <option value="Investigation Services">
                      Investigation Services
                    </option>
                    <option value="Property Management">
                      Property Management
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={buttonStatus === "Sending..."}
                className="w-full bg-brand-accent text-brand-navy font-bold text-lg py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {buttonStatus}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
