import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* 1. PAGE HEADER HERO */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-brand-navy overflow-hidden flex items-center justify-center pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Office Building"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy"></div>
        </div>
        <div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          data-aos="fade-down"
        >
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Our Legacy
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            About JMD Security
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A legacy of trust, discipline, and uncompromising protection since
            2010.
          </p>
        </div>
      </div>

      {/* 2. OUR STORY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="absolute inset-0 bg-brand-accent rounded-xl transform -translate-x-4 translate-y-4 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
              alt="JMD Team"
              className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
              Our History
            </h2>
            <h3 className="text-3xl font-extrabold text-brand-navy mb-6">
              Built on a Foundation of Excellence
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2010, JMD Human Capital Management began with a
              singular vision: to elevate the standard of security and facility
              management across India. Over the past 14+ years, we have grown
              from a local agency to a nationwide leader, trusted by top-tier
              MNCs and institutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our success is not just built on deploying personnel, but on our
              rigorous training programs, strict operational discipline, and our
              ability to adapt to the unique security challenges of each client
              we serve.
            </p>
          </div>
        </div>
      </div>

      {/* 3. CORE VALUES SECTION */}
      <div className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2">
              Our Principles
            </h2>
            <h3 className="text-3xl font-extrabold text-brand-navy mb-4">
              The Core Values That Drive Us
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div
              className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-20 h-20 mx-auto bg-brand-navy rounded-full flex items-center justify-center mb-6 text-brand-accent">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">
                Honesty
              </h4>
              <p className="text-gray-600">
                Integrity is non-negotiable. We operate with complete ethical
                clarity in every client interaction and deployment.
              </p>
            </div>

            <div
              className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 mx-auto bg-brand-navy rounded-full flex items-center justify-center mb-6 text-brand-accent">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">
                Transparency
              </h4>
              <p className="text-gray-600">
                We believe in open communication. Our clients always have full
                visibility into our processes, pricing, and performance.
              </p>
            </div>

            <div
              className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 mx-auto bg-brand-navy rounded-full flex items-center justify-center mb-6 text-brand-accent">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">
                Quality
              </h4>
              <p className="text-gray-600">
                As an ISO-certified agency, we deliver premium service that
                meets the highest global standards of facility management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. DIRECTOR'S MESSAGE */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-brand-navy rounded-2xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-accent opacity-10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-accent opacity-10 rounded-tl-full"></div>

          <div className="p-10 md:p-16 text-center">
            <svg
              className="w-12 h-12 text-brand-accent mx-auto mb-6 opacity-80"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
              "Security is not a product we sell; it is a promise we keep. Our
              journey since 2010 has been defined by our commitment to client
              safety, the welfare of our workforce, and our unwavering focus on
              service excellence. When you partner with JMD, you are choosing a
              team that treats your assets with the same vigilance as our own."
            </p>
            <div>
              <h4 className="text-2xl font-bold text-white">
                Mr. Ajit Kumar Singh
              </h4>
              <p className="text-brand-accent font-medium mt-1">
                Managing Director, JMD Human Capital Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CALL TO ACTION */}
      <div className="text-center pb-20" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-brand-navy mb-6">
          Ready to secure your business?
        </h3>
        <Link
          to="/contact"
          className="inline-block bg-brand-accent text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg border-b-4 border-brand-navy/20"
        >
          Contact Our Team Today
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
