import React from "react";

const ClientMarquee = () => {
  const clients = [
    { name: "Aditya Birla", logo: "/clients/aditya-birla.png" },
    { name: "Toyota", logo: "/clients/toyota.png" },
    { name: "Kendriya Vidyalaya", logo: "/clients/kendriya-vidyalaya.png" },
    { name: "Themis Medicare", logo: "/clients/themis-medicare.png" },
    { name: "Nerolac", logo: "/clients/nerolac.png" },
    { name: "Nilkamal", logo: "/clients/nilkamal.svg" },
    { name: "Essar Steel", logo: "/clients/essar.png" },
    { name: "Tamilnad Mercantile Bank", logo: "/clients/tmb.png" },
    { name: "Global Wind Power", logo: "/clients/global-wind.png" },
    { name: "Excel Crop Care", logo: "/clients/excel.png" },
    { name: "Time Technoplast", logo: "/clients/time-technoplast.png" },
    { name: "Vapi Green Enviro", logo: "/clients/vapi-enviro.png" },
    { name: "Stonemann Royale Ltd.", logo: "/clients/stonemann-logo.png" },
    { name: "Sai Paper Product", logo: "/clients/sai paper product.png" },
    { name: "Perma Construction", logo: "/clients/perma-construction.png" },
    { name: "VJB Group", logo: "/clients/vjb-group.png" },
    { name: "Universal Goldoil", logo: "/clients/universal-goldoil.png" },
    { name: "ACPL", logo: "/clients/acpl.png" },
    { name: "Param Packaging", logo: "/clients/param-packaging.png" },
    { name: "Pinetree Packaging", logo: "/clients/pinetree-packaging.png" },
    { name: "Proma Industries", logo: "/clients/proma-industries.png" },
    { name: "Dekon Power", logo: "/clients/dekon-power.png" },
    { name: "Premier42", logo: "/clients/premier42.png" },
    { name: "Shinano", logo: "/clients/shinano.png" },
    { name: "Vikas Technoplast", logo: "/clients/vikas.png" },
    { name: "SK Plastic", logo: "/clients/sk-plastic.png" },
    { name: "ITSUFUKU", logo: "/clients/itsufuku.png" },
    { name: "Vijay Sabre", logo: "/clients/vijay.png" },
    { name: "Nutech", logo: "/clients/nutech.png" },
    { name: "Cona", logo: "/clients/cona.png" },
    { name: "Supreme", logo: "/clients/supreme.png" },
    { name: "NSIC", logo: "/clients/nsic.png" },
    { name: "NIFT", logo: "/clients/nift.png" },
    { name: "Flair", logo: "/clients/flair.png" },
    { name: "Mundra", logo: "/clients/mundra.png" },
    { name: "DNHDD Tourism", logo: "/clients/dnhdd-tourism.png" },
    { name: "VKC Pride", logo: "/clients/vkc-pride.png" },
    { name: "Shree Swaminarayan Gurukul", logo: "/clients/gurukul.png" },
    { name: "Jeevandeep Hospital", logo: "/clients/jeevandeep.png" },
    { name: "Vapi Industries Association", logo: "/clients/via.png" },
    {
      name: "Hindustan Metal Industries",
      logo: "/clients/hindustan-metal.png",
    },
    { name: "PDPL Group", logo: "/clients/pdpl.svg" },
    { name: "Shree Jalaram Group", logo: "/clients/jalaram.png" },
    { name: "All Time", logo: "/clients/all-time.png" },
  ];

  return (
    <div className="bg-white py-16 overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders Nationwide
        </h3>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="flex animate-marquee items-center">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-8 w-40 flex-shrink-0 flex items-center justify-center h-20 group cursor-pointer"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="hidden text-center text-sm font-bold text-brand-navy w-full px-2">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
