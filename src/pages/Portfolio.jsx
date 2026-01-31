const Portfolio = () => {
  const galleryItems = [
    {
      title: "Instalasi Gate System",
      image: "images/galeri-1.jpeg",
    },
    {
      title: "Instalasi Gate System",
      image: "images/galeri-2.jpeg",
    },
    {
      title: "Instalasi Gate System",
      image: "images/galeri-3.jpeg",
    },
  ];

  // Data Mitra sesuai rekam jejak PSU
  const partners = [
    {
      name: "Perumda Pasar Juara Bandung",
      detail: "Pasar Sederhana",
      icon: "storefront",
    },
    {
      name: "GOR Gotong Royong",
      detail: "Kabupaten Subang",
      icon: "sports_kabaddi",
    },
    {
      name: "Lapang Bintang",
      detail: "Kabupaten Subang",
      icon: "stadium",
    },
    {
      name: "Yayasan Pendidikan Islam",
      detail: "Al Azhar Bekasi",
      icon: "stadium",
    },
    {
      name: "Masjid Al Jabbar",
      detail: "Bandung",
      icon: "stadium",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="flex min-h-[360px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="max-w-[800px] relative z-10">
            <h1 className="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
              Galeri & Legalitas
            </h1>
            <p className="text-slate-700 text-lg md:text-xl font-bold mt-4 drop-shadow-sm">
              Bukti nyata kinerja PT. Parkindo Sanju Utama dan kepatuhan
              legalitas usaha.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-20">
        {/* Galeri Kegiatan Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-black">
              Galeri Kegiatan
            </h2>
            <div className="h-1 flex-grow bg-slate-100 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg bg-slate-100 border border-slate-100"
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-8 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION BARU: Mitra Kerjasama */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-black">
              Mitra Kerjasama
            </h2>
            <div className="h-1 flex-grow bg-slate-100 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">
                    {partner.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg leading-tight">
                    {partner.name}
                  </h4>
                  <p className="text-slate-500 text-sm font-bold mt-1">
                    {partner.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Portrait Dokumentasi */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-black">
              Dokumentasi Lapangan
            </h2>
            <div className="h-1 flex-grow bg-slate-100 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Proses Instalasi
              </div>
              <h3 className="text-3xl font-black text-slate-900 leading-tight">
                Lihat Bagaimana Tim Kami Bekerja di Lapangan
              </h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Video ini menunjukkan proses teknis pemasangan gate system
                otomatis oleh teknisi profesional PSU. Kami memastikan setiap
                komponen terpasang presisi untuk durabilitas jangka panjang.
              </p>
              <ul className="space-y-3">
                {[
                  "Instalasi Kabel Under-ground",
                  "Setting Barrier Gate",
                  "Integrasi Sistem Sensor",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-bold"
                  >
                    <span className="material-symbols-outlined text-primary text-sm">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-slate-900 bg-slate-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/instalasi.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Legalitas Usaha Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-black">
              Legalitas Usaha
            </h2>
            <div className="h-1 flex-grow bg-slate-100 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl font-bold">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    NIB Berbasis Risiko
                  </h3>
                  <p className="text-sm font-bold text-primary mt-1">
                    Nomor: 0703220059196
                  </p>
                </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                Diterbitkan secara resmi oleh Menteri Investasi/BKPM sebagai
                bukti kepatuhan terhadap regulasi penanaman modal.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl font-bold">
                    gavel
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    NPWP Perusahaan
                  </h3>
                  <p className="text-sm font-bold text-primary mt-1">
                    0635.8764.3642.1000
                  </p>
                </div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                Terdaftar resmi sebagai wajib pajak badan untuk transparansi
                administrasi fiskal yang akuntabel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
