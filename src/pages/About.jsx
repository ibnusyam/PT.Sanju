const About = () => {
  return (
    <>
      {/* Header Section with Background Pattern */}
      <section className="relative bg-slate-900 pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Background pattern"
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-background-light"></div>
        </div>
        <div className="relative z-10 px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1200px] text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Tentang Kami
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Mengenal lebih dekat PT. Parkindo Sanju Utama, mitra strategis
              terpercaya dalam pengelolaan fasilitas parkir modern.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 md:py-24 bg-background-light relative z-20 -mt-10 rounded-t-[2.5rem]">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                  <img
                    alt="Professional team"
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                    src="/images/tentang.jpeg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Profil Perusahaan
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Transformasi Menuju Layanan Parkir Unggul
                </h2>
                <div className="text-lg text-slate-600 space-y-4">
                  <p>
                    <strong>PT. Parkindo Sanju Utama (PSU)</strong> adalah
                    perubahan dari PT Parkindo Sanju Perdana. Kami adalah
                    perusahaan yang bergerak di bidang jasa perparkiran dan
                    penyedia alat-alat sistem parkir yang sudah berizin resmi
                    (NIB Berbasis Risiko).
                  </p>
                  <p>
                    Saat ini PSU telah berpengalaman mengelola parkir modern di
                    berbagai pusat keramaian, mulai dari Alun-Alun, Pertokoan,
                    Rumah Sakit, hingga Pasar Tradisional. Dengan pengalaman
                    tersebut dan mengedepankan teknologi serta tenaga
                    profesional, PSU siap bersaing di bidang pengelolaan Parkir
                    Modern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Vision Card */}
              <div className="bg-primary text-white p-10 md:p-14 rounded-2xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[150px]">
                    visibility
                  </span>
                </div>
                <h3 className="text-xl font-medium opacity-90 mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-white"></span> Visi Kami
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight relative z-10">
                  "Menjadi tolak ukur baru dalam manajemen parkir."
                </h2>
                <p className="mt-4 text-white/80">
                  Mengjamin kualitas layanan, memastikan pengelolaan lahan
                  parkir dengan efisien untuk kenyamanan pengguna.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-2xl flex flex-col justify-center">
                <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined">flag</span> Misi
                  Kami
                </h3>
                <ul className="flex flex-col gap-6">
                  {[
                    {
                      id: 1,
                      title: "Layanan Berkualitas",
                      desc: "Menyediakan layanan berkualitas tinggi yang memberikan ketenangan kepada klien.",
                    },
                    {
                      id: 2,
                      title: "Operational Excellence",
                      desc: "Menciptakan bisnis berkelanjutan dengan menerapkan operasional excellence.",
                    },
                    {
                      id: 3,
                      title: "Teknologi Maju",
                      desc: "Mendorong kemajuan teknologi manajemen parkir melalui penelitian dan pengembangan.",
                    },
                  ].map((misi) => (
                    <li key={misi.id} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center shrink-0 mt-1">
                        <span className="text-sm font-bold">{misi.id}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">
                          {misi.title}
                        </h4>
                        <p className="text-slate-600 text-sm">{misi.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Nilai Utama PSU
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Kompetensi",
                  icon: "psychology",
                  color: "indigo",
                  desc: "PSU terus belajar dan mengembangkan kapabilitas.",
                },
                {
                  title: "Loyal",
                  icon: "handshake",
                  color: "emerald",
                  desc: "PSU berdedikasi dan mengutamakan kepentingan bisnis berkelanjutan.",
                },
                {
                  title: "Adaptif",
                  icon: "construction",
                  color: "amber",
                  desc: "PSU terus berinovasi dan antusias menghadapi perubahan.",
                },
                {
                  title: "Kolaboratif",
                  icon: "diversity_3",
                  color: "rose",
                  desc: "Kami membangun kerja sama yang sinergis.",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-${val.color}-50 text-${val.color}-600 flex items-center justify-center mb-6`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {val.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
