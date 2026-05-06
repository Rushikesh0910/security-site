import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* 1. PAGE HEADER HERO */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-brand-navy overflow-hidden flex items-center justify-center pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
            alt="Customer Support"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy"></div>
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          data-aos="fade-down"
        >
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Contact Us
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Get in Touch for Reliable Protection
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about our services or need a customized security
            plan? Our team is ready to assist you 24/7.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Office Details */}
          <div data-aos="fade-right" className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-accent">
              <h3 className="text-xl font-bold text-brand-navy mb-6">
                Our Office
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy p-3 rounded-lg text-brand-accent">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-400 uppercase mb-1">
                      Phone
                    </p>
                    <p className="text-lg font-bold text-brand-navy">
                      +91 93751 01111{" "}
                      <span className="text-sm font-medium text-gray-500 block xl:inline">
                        (Client Inquiries)
                      </span>
                    </p>
                    <p className="text-lg font-bold text-brand-navy mt-1">
                      +91 93283 48511{" "}
                      <span className="text-sm font-medium text-gray-500 block xl:inline">
                        (HR & Careers)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy p-3 rounded-lg text-brand-accent">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-400 uppercase mb-1">
                      Email
                    </p>
                    <p className="text-lg font-bold text-brand-navy break-all">
                      info@jmdhumancapital.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy p-3 rounded-lg text-brand-accent">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-400 uppercase mb-1">
                      Headquarters
                    </p>
                    <p className="text-lg font-bold text-brand-navy leading-tight">
                      SF-205 (2nd Floor),
                      <br />
                      Arihant Complex,
                      <br />
                      Beside Vishal Megamart,
                      <br />
                      GIDC, Vapi, Valsad,
                      <br />
                      Gujarat - 396195
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64 relative border-2 border-gray-200">
              <iframe
                title="JMD Security Headquarters"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Arihant+Complex,+GIDC,+Vapi,+Gujarat+396195&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div data-aos="fade-left" className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-navy mb-8">
                Send a Client Inquiry
              </h3>
              <form className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Service Required
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all appearance-none cursor-pointer">
                      <option>Security Guards</option>
                      <option>House Keeping Services</option>
                      <option>Manpower Services</option>
                      <option>HR Consultancy</option>
                      <option>Investigation Services</option>
                      <option>Property Management</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
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

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button
                    type="button"
                    className="w-full bg-brand-navy text-white font-bold text-lg py-5 rounded-lg hover:bg-brand-charcoal transition-all transform hover:scale-[1.01] shadow-xl border-b-4 border-brand-accent"
                  >
                    Send Inquiry Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NATIONWIDE PRESENCE MAP SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
              Our Footprint
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Nationwide Presence
            </h3>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              With a strong network across India, JMD Human Capital is always
              within reach to provide reliable, on-demand security solutions.
            </p>
          </div>

          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative w-full max-w-2xl p-4">
              {/* The Clean Base Map */}
              <img
                src="/indian-map.png"
                alt="Map of India showing JMD office locations"
                className="w-full h-auto opacity-90 drop-shadow-xl"
              />

              {/* The Location Pins */}
              {[
                { state: "Jammu & Kashmir", top: "13%", left: "32%" },
                { state: "Punjab", top: "20%", left: "28%" },
                { state: "Haryana", top: "29%", left: "31%" },
                { state: "Uttar Pradesh", top: "33%", left: "45%" },
                { state: "Gujarat", top: "50%", left: "15%" },
                { state: "Madhya Pradesh", top: "44%", left: "38%" },
                { state: "DNH", top: "54%", left: "19%" },
                { state: "Maharashtra", top: "60%", left: "20%" },
                { state: "Chhattisgarh", top: "48%", left: "50%" },
                { state: "Jharkhand", top: "46%", left: "57%" },
                { state: "Odisha", top: "53%", left: "57%" },
                { state: "West Bengal", top: "49%", left: "66%" },
                { state: "Telangana", top: "61%", left: "39%" },
                { state: "Karnataka", top: "72%", left: "25%" },
                { state: "Tamil Nadu", top: "81%", left: "37%" },
                { state: "Kerala", top: "86%", left: "29%" },
              ].map((loc, index) => (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ top: loc.top, left: loc.left }}
                >
                  {/* Glowing pulse effect */}
                  <div className="absolute -inset-1 bg-brand-accent rounded-full animate-ping opacity-75"></div>
                  {/* Actual dot */}
                  <div className="relative w-3 h-3 bg-brand-accent border-2 border-white rounded-full shadow-lg"></div>

                  {/* Tooltip on hover */}
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-brand-navy text-white text-xs font-bold py-1 px-2 rounded whitespace-nowrap -top-8 -left-1/2 transform -translate-x-1/2 shadow-xl z-20 pointer-events-none">
                    {loc.state}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
