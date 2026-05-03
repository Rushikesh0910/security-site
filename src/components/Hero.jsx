import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-aos="zoom-out"
        data-aos-duration="2000"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <h2
          data-aos="fade-up"
          className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-xl"
        >
          JMD Security Services
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 uppercase"
        >
          Born to <span className="text-brand-accent">Protect</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Providing Complete Management Solutions with 15+ years of trusted
          excellence in security, manpower, and facility management across
          India.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-brand-accent text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/services"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-brand-navy transition-all inline-block"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
