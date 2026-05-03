import React from "react";

const Stats = () => {
  const stats = [
    { id: 1, name: "Years of Experience", value: "15+" },
    { id: 2, name: "Trained Guards", value: "500+" },
    { id: 3, name: "Sites Secured", value: "250+" },
    { id: 4, name: "Incidents Prevented", value: "10k+" },
  ];

  return (
    <div className="bg-brand-charcoal py-12 relative z-20 shadow-xl border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              data-aos="zoom-in"
              data-aos-delay={index * 150} // Staggers the pop-in
              className="p-4 md:border-r-2 border-gray-600 last:border-0 hover:scale-105 transition-transform"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-brand-accent uppercase tracking-widest">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
