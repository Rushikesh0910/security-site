import React from "react";

const WhyUs = () => {
  return (
    // Removed id="about" from this div
    <div className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div
            data-aos="fade-right"
            className="mb-12 lg:mb-0 hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="relative rounded-lg shadow-2xl overflow-hidden border-b-8 border-brand-accent">
              <div className="absolute inset-0 bg-brand-navy opacity-20 z-10 hover:opacity-0 transition-opacity duration-300"></div>
              <img
                className="w-full h-full object-cover min-h-[400px]"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
                alt="Professional security team"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-base text-brand-accent font-bold tracking-wide uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-navy sm:text-4xl mb-6">
              The Highest Standard of Protection
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We don't just hire guards; we deploy highly trained security
              professionals. Our rigorous vetting process ensures that only the
              most reliable individuals wear the JMD Security uniform.
            </p>

            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-navy text-brand-accent shadow-md">
                    <svg
                      className="h-6 w-6"
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
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-brand-navy">
                    Rigorous Background Checks
                  </h4>
                  <p className="mt-2 text-base text-gray-600">
                    Every guard undergoes extensive police verification,
                    reference checks, and background screening prior to
                    deployment.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-navy text-brand-accent shadow-md">
                    <svg
                      className="h-6 w-6"
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
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-brand-navy">
                    Intensive Physical & Mental Training
                  </h4>
                  <p className="mt-2 text-base text-gray-600">
                    Mandatory training protocols covering first aid, fire
                    safety, conflict de-escalation, and rapid emergency
                    response.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-navy text-brand-accent shadow-md">
                    <svg
                      className="h-6 w-6"
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
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-brand-navy">
                    24/7 Supervision & Patrolling
                  </h4>
                  <p className="mt-2 text-base text-gray-600">
                    Mobile supervisors routinely conduct unannounced site visits
                    to ensure guards remain alert, equipped, and
                    protocol-compliant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
