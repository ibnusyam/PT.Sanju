const Services = () => {
  return (
    <>
      {/* Hero Section - Light Overlay */}
      <div className="@container">
        <div
          className="relative w-full min-h-[480px] flex flex-col justify-center items-center bg-no-repeat bg-center p-8 text-center"
          style={{
            // Overlay gradien hitam agar teks putih tetap terbaca tajam
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url('/images/ofice.jpg')`,
            // Menggunakan 100% 100% agar gambar dipaksa masuk ke bingkai tanpa terpotong
            backgroundSize: "100% 100%",
          }}
        >
          <div className="relative z-10 flex flex-col gap-4 max-w-[800px]">
            {/* Teks diubah menjadi putih agar terlihat jelas di atas gambar yang tajam */}
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
              Layanan Kami
            </h1>
            <h2 className="text-slate-100 text-lg md:text-xl font-bold leading-relaxed max-w-[600px] mx-auto drop-shadow-md">
              Solusi terintegrasi untuk kebutuhan parkir Anda: Sistem, Alat,
              Pengelolaan, dan SDM.
            </h2>
          </div>
        </div>
      </div>

      <div className="layout-container flex h-full grow flex-col max-w-[1280px] mx-auto w-full">
        {/* Parkir Sistem Section - White BG */}
        <div className="px-4 md:px-10 py-16 border-b border-slate-100 bg-white">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight">
                Parkir Sistem
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Menyediakan alat-alat parkir yang modern yang sudah terintegrasi
                dengan sistem terbarukan.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Barrier Gate System",
                  "Software Parkir",
                  "Maintenance Sistem",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary font-bold">
                      check_circle
                    </span>
                    <span className="text-slate-700 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <img
                alt="SDM"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                src="/images/gate.jpg"
              />
            </div>
          </div>
        </div>

        {/* Jual Alat Section - Soft Light BG */}
        <div className="px-4 md:px-10 py-16 bg-slate-50">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-black max-w-[720px]">
              Jual Alat Alat Parkir
            </h2>
            <p className="text-slate-600 mt-4 max-w-[640px] font-medium">
              Menyediakan alat parkir modern untuk komersil. Kami bantu dalam
              pemasangan instalasi sampai selesai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Barrier Gate",
                icon: "add_road",
                desc: "Palang parkir otomatis kualitas tinggi.",
              },
              {
                title: "Pos & Komputer",
                icon: "computer",
                desc: "Perangkat keras untuk operasional di pos.",
              },
              {
                title: "CCTV & LPR",
                icon: "videocam",
                desc: "Kamera pemantau dan pengenal plat nomor.",
              },
            ].map((alat, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white">
                    {alat.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {alat.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {alat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pengelolaan & SDM Section */}
        <div className="px-4 md:px-10 py-24 bg-white">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="SDM"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  src="/images/sdm.jpeg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight">
                Pengelolaan & SDM
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="text-primary font-bold">
                    Pengelolaan Parkir:
                  </span>{" "}
                  Menerima kerjasama dalam pengelolaan parkir dengan mitra usaha
                  seperti Sewa, Revenue Sharing, atau Profit Sharing.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <span className="text-primary font-bold">
                    Personil Handal (SDM):
                  </span>{" "}
                  PSU memastikan bahwa personil yang mengelola parkir adalah
                  personil yang berpengalaman dan terlatih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
