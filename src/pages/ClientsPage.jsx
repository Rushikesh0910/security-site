import React from "react";

const ClientsPage = () => {
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
    { name: "VKC Pride", logo: "/clients/vkc-pride.png" },
    { name: "NIFT", logo: "/clients/nift.svg" },
    { name: "Flair", logo: "/clients/flair.png" },
    { name: "Mundra", logo: "/clients/mundra.png" },
    { name: "DNHDD Tourism", logo: "/clients/dnhdd-tourism.png" },
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
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-brand-navy overflow-hidden flex items-center justify-center pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Partners"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy"></div>
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          data-aos="fade-down"
        >
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Our Trusted Partners
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Clients Who Trust JMD
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are proud to provide complete management and security solutions
            to some of the most reputed organizations, MNCs, and institutions
            across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 50}
              className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(16.666%-20px)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg transition-all duration-300 h-32 group"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="w-full h-16 object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-300"
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

      <div data-aos="fade-up" className="text-center pb-20">
        <h3 className="text-2xl font-bold text-brand-navy mb-6">
          Join Our Growing List of Satisfied Clients
        </h3>
        <a
          href="/contact"
          className="inline-block bg-brand-accent text-brand-navy px-8 py-4 rounded font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
        >
          Partner With Us Today
        </a>
      </div>
    </div>
  );
};

export default ClientsPage;
