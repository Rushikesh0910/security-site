import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001B3D] mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm text-gray-600 space-y-6">
          <p className="font-medium">Last updated: May 2026</p>

          <h2 className="text-xl font-bold text-[#001B3D] mt-8">
            1. Information We Collect
          </h2>
          <p>
            At JMD Security Services, we collect information you provide
            directly to us, such as when you fill out a contact form, request a
            quote, or apply for a career. This may include your name, email
            address, phone number, and any other details you choose to provide.
          </p>

          <h2 className="text-xl font-bold text-[#001B3D] mt-8">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to communicate with you, process
            your requests for security personnel, and improve our website and
            services. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-xl font-bold text-[#001B3D] mt-8">
            3. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at info@jmdhumancapital.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
