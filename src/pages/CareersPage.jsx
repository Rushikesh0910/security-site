import React, { useState } from "react";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Application submitted successfully! Our HR team will contact you soon.",
    );
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. PAGE HEADER HERO */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-brand-navy overflow-hidden flex items-center justify-centerpt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Team"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy"></div>
        </div>
        <div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          data-aos="fade-down"
        >
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Join Our Team
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Build Your Career With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join a nationwide leader in security and facility management. We are
            always looking for dedicated, disciplined, and driven professionals.
          </p>
        </div>
      </div>

      {/* 2. WHY JOIN JMD? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
            Life at JMD
          </h2>
          <h3 className="text-3xl font-extrabold text-brand-navy mb-4">
            Why Choose JMD Human Capital?
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 text-brand-navy">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Career Growth
            </h4>
            <p className="text-gray-600">
              We believe in promoting from within. Start as a guard, grow into a
              supervisor, and build a lifelong career.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 text-brand-navy">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Job Security
            </h4>
            <p className="text-gray-600">
              As an ISO-certified agency established in 2010, we offer stability
              and timely payments to all our employees.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 text-brand-navy">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Professional Training
            </h4>
            <p className="text-gray-600">
              Receive industry-leading training in physical security, fire
              safety, and modern facility management techniques.
            </p>
          </div>
        </div>
      </div>

      {/* 3. APPLICATION FORM */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div data-aos="fade-up">
          <div className="bg-brand-navy rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-3">
                Submit Your Application
              </h3>
              <p className="text-gray-400">
                We are always accepting resumes from talented individuals. Fill
                out the form below and our HR department will reach out if your
                profile matches our requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Area of Interest *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all [&>option]:text-brand-navy"
                >
                  <option value="" disabled>
                    Select your field
                  </option>
                  <option value="Security Personnel">Security Personnel</option>
                  <option value="Facility Management / Housekeeping">
                    Facility Management / Housekeeping
                  </option>
                  <option value="Field Supervisor">
                    Field Supervisor / Operations
                  </option>
                  <option value="HR & Administration">
                    HR & Administration
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Resume (PDF/DOC) *
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-brand-accent file:text-brand-navy hover:file:bg-yellow-400 transition-all cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell us briefly about your experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-accent text-brand-navy font-bold text-lg px-8 py-4 rounded hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(252,185,0,0.3)] hover:shadow-[0_0_25px_rgba(252,185,0,0.5)]"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
