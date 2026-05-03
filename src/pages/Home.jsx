import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClientMarquee from "../components/ClientMarquee";
import Contact from "../components/Contact";

// Smooth Counter Component
const Counter = ({ end, duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-navy min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000"
            alt="Security Guards"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl" data-aos="fade-right">
            <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              JMD Human Capital Management
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              BORN TO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500">
                PROTECT.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Providing Complete Management Solutions across India since 2010.
              We deliver premium security, facility management, and HR solutions
              built on honesty, transparency, and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/services"
                className="bg-brand-accent text-brand-navy text-center font-bold text-lg px-8 py-4 rounded hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(252,185,0,0.4)]"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brand-accent text-brand-accent text-center font-bold text-lg px-8 py-4 rounded hover:bg-brand-accent hover:text-brand-navy transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CLIENT MARQUEE (Now moved above Who We Are) */}
      <ClientMarquee />

      {/* 3. ABOUT US / WHO WE ARE SECTION */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
                Who We Are
              </h2>
              <h3 className="text-4xl font-extrabold text-brand-navy mb-6">
                Leading the Industry with Excellence & Discipline
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Since our inception in 2010, JMD has grown from a regional
                provider to a nationwide leader in security and facility
                management. We believe that true security comes from a
                foundation of rigorous training, strict discipline, and
                unwavering integrity.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you need specialized VIP protection, industrial
                manpower, or comprehensive property management, our tailored
                solutions ensure your assets and personnel are always in safe
                hands.
              </p>
              <Link
                to="/about"
                className="text-brand-navy font-bold border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors  items-center inline-flex"
              >
                Discover Our History
                <svg
                  className="w-5 h-5 ml-2"
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
            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-brand-accent rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Security"
                className="rounded-xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. STATS SECTION */}
      <div className="bg-brand-navy py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up">
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">
                <Counter end={15} duration={7000} />+
              </div>
              <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
                Years Experience
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">
                <Counter end={250} duration={7000} />+
              </div>
              <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
                Corporate Clients
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">
                <Counter end={5000} duration={7000} />+
              </div>
              <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
                Trained Personnel
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">
                <Counter end={50} duration={7000} />+
              </div>
              <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
                Cities Covered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. WHAT WE DO SECTION */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
              What We Do
            </h2>
            <h3 className="text-4xl font-extrabold text-brand-navy mb-4">
              Complete Management Solutions
            </h3>
            <p className="text-gray-600 text-lg">
              We offer a wide range of specialized services tailored to meet the
              unique needs of corporate, industrial, and residential clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-accent group hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="w-14 h-14 bg-brand-navy rounded-lg flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
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
                Security Services
              </h4>
              <p className="text-gray-600 mb-4">
                Highly trained, well-built security personnel equipped for
                industrial, corporate, and VIP protection.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-accent group hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-14 h-14 bg-brand-navy rounded-lg flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">
                Facility Management
              </h4>
              <p className="text-gray-600 mb-4">
                Professional housekeeping, mechanised cleaning, and
                comprehensive property maintenance.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-accent group hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 bg-brand-navy rounded-lg flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">
                Manpower Outsourcing
              </h4>
              <p className="text-gray-600 mb-4">
                Skilled, semi-skilled, and un-skilled labor supply to keep your
                industrial operations running smoothly.
              </p>
            </div>
          </div>

          {/* New View All Services Option */}
          <div className="text-center" data-aos="fade-up">
            <Link
              to="/services"
              className="inline-flex items-center bg-brand-navy text-white px-8 py-4 rounded font-bold text-lg hover:bg-brand-accent hover:text-brand-navy transition-all shadow-lg group"
            >
              View All Services
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
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
      </div>

      {/* 6. THE CONTACT FORM COMPONENT */}
      <Contact />
    </div>
  );
};

export default Home;
