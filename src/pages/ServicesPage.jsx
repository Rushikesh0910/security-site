import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Security Services",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      description:
        "Highly trained security personnel equipped for industrial, corporate, and residential protection. We provide armed and unarmed guards, VIP protection, and event security.",
      features: [
        "Armed & Unarmed Guards",
        "Corporate Security",
        "Event Security",
        "VIP Protection",
      ],
    },
    {
      title: "Facility Management",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      description:
        "Comprehensive property maintenance ensuring a clean, safe, and efficient environment. Our mechanised cleaning and housekeeping staff are trained to international standards.",
      features: [
        "Mechanised Cleaning",
        "Corporate Housekeeping",
        "Pest Control",
        "Waste Management",
      ],
    },
    {
      title: "Manpower Outsourcing",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      description:
        "Reliable workforce solutions to keep your operations running smoothly. We supply verified personnel tailored to your specific industry requirements.",
      features: [
        "Skilled Labor",
        "Semi-skilled Labor",
        "Un-skilled Labor",
        "Technical Staff",
      ],
    },
    {
      title: "HR Consultancy",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      description:
        "End-to-end human resource solutions, from recruitment and payroll management to compliance and employee relations, ensuring you build a strong team.",
      features: [
        "Payroll Management",
        "Recruitment",
        "Statutory Compliance",
        "Training & Development",
      ],
    },
    {
      title: "Investigation Services",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      ),
      description:
        "Discreet and professional corporate investigation services to protect your business interests, including background checks and fraud investigation.",
      features: [
        "Background Verification",
        "Corporate Investigations",
        "Asset Verification",
        "Fraud Detection",
      ],
    },
    {
      title: "Property Management",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
      description:
        "Complete oversight of your real estate assets. We handle the day-to-day operations, maintenance, and security so you can focus on your core business.",
      features: [
        "Asset Maintenance",
        "Vendor Management",
        "Energy Management",
        "24/7 Support",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* PAGE HERO */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-brand-navy overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000"
            alt="Business Services"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy"></div>
        </div>
        <div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          data-aos="fade-down"
        >
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Expert Solutions
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive management solutions tailored for industrial,
            corporate, and residential excellence.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-navy rounded-lg flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm font-medium text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-brand-accent mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="text-brand-navy font-bold hover:text-brand-accent transition-colors text-sm uppercase tracking-wider flex items-center"
                >
                  Request Service
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-navy py-16">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Need a Custom Management Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to design a service package that fits your exact
            operational requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-accent text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
