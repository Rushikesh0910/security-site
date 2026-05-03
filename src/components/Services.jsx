import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Security",
      description:
        "Professional, highly visible guards for office buildings, corporate headquarters, and front desk access control.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Residential Patrols",
      description:
        "24/7 dedicated guarding and mobile patrols for gated communities, apartment complexes, and private estates.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Event Security",
      description:
        "Expert crowd management, VIP protection, and access control for corporate events, concerts, and private gatherings.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Industrial Protection",
      description:
        "Rigorous asset protection, gatehouse operations, and theft prevention for construction sites and warehouses.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    // Removed id="services" from this div
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-base text-brand-accent font-bold tracking-wide uppercase">
            What We Do
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Elite Guarding Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Tailored security personnel solutions to protect your people,
            property, and assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-brand-accent group"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-brand-accent font-semibold hover:text-brand-navy transition-colors inline-flex items-center cursor-pointer"
              >
                Learn more
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
