import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001B3D] mb-8">
          Terms of Service
        </h1>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm text-gray-600 space-y-6">
          <p className="font-medium">Last updated: May 2026</p>

          <h2 className="text-xl font-bold text-[#001B3D] mt-8">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the JMD Security Services website, you accept
            and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl font-bold text-[#001B3D] mt-8">
            2. Provision of Services
          </h2>
          <p>
            JMD Security Services provides facility management and security
            personnel across India. The details of specific contracts, including
            guard deployment and HR solutions, will be governed by individual
            service agreements signed with the client.
          </p>

          <h2 className="text-xl font-bold text-[#001B3D] mt-8">
            3. User Conduct
          </h2>
          <p>
            You agree to use our website only for lawful purposes. Harassment,
            submitting false information through our contact forms, or
            attempting to breach website security is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
