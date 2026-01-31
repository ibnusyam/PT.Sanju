import { Link } from "react-router-dom";

const Partnership = () => {
  const models = [
    {
      title: "Sewa (Flat Rent)",
      icon: "payments",
      desc: "Pemilik lahan menerima pembayaran sewa tetap secara bulanan atau tahunan tanpa dipengaruhi oleh fluktuasi jumlah kendaraan.",
      pros: [
        "Pendapatan Pasti",
        "Tanpa Risiko Operasional",
        "Kontrak Jangka Panjang",
      ],
      color: "blue",
    },
    {
      title: "Revenue Sharing",
      icon: "analytics",
      desc: "Pembagian hasil berdasarkan pendapatan kotor (bruto) dari total transaksi parkir sebelum dikurangi biaya operasional.",
      pros: [
        "Transparansi Tinggi",
        "Potensi Cuan Lebih Besar",
        "Laporan Real-time",
      ],
      color: "indigo",
    },
    {
      title: "Profit Sharing",
      icon: "account_balance_wallet",
      desc: "Pembagian keuntungan bersih setelah dikurangi seluruh biaya operasional dan maintenance.",
      pros: [
        "Kemitraan Strategis",
        "Optimasi Biaya Bersama",
        "Sinergi Operasional",
      ],
      color: "emerald",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[480px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat p-8 text-center"
        style={{
          // Menggunakan gradien hitam transparan di bagian bawah agar gambar layanan.jpeg terlihat tajam

          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url('/images/agreement.jpg')`,
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">
            Skema Kerjasama
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-medium drop-shadow-md">
            Pilih model bisnis yang paling sesuai dengan profil aset dan target
            profit Anda.
          </p>
        </div>
      </section>

      {/* Partnership Models Card */}
      <section className="py-20 px-4 md:px-10 lg:px-40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-8 rounded-3xl border border-slate-200 bg-white hover:border-primary hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-${item.color}-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}
                >
                  <span className="material-symbols-outlined text-3xl font-bold">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="mt-auto space-y-3">
                  {item.pros.map((pro, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm font-bold">
                        check
                      </span>
                      <span className="text-sm font-bold text-slate-700">
                        {pro}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Security Section */}
      <section className="pb-20 px-4 md:px-10 lg:px-40">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase mb-6 tracking-wider">
                  <span className="material-symbols-outlined text-sm font-bold">
                    verified_user
                  </span>
                  Keamanan Terjamin
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Kemitraan Aman &{" "}
                  <span className="text-primary">Terlindungi</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  Kami mengerti bahwa keamanan aset adalah prioritas utama Anda.
                  PT. Parkindo Sanju Utama memberikan proteksi ekstra melalui{" "}
                  <strong>Asuransi Perlindungan Aset</strong> untuk memitigasi
                  segala bentuk risiko operasional di lapangan.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/6289604700013"
                    className="h-12 px-8 flex items-center justify-center bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-primary-dark transition-all"
                  >
                    Konsultasi Gratis
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  {/* Container Bulat dengan Gambar Lokal */}
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-50 rounded-full flex items-center justify-center overflow-hidden border-8 border-white shadow-inner">
                    <img
                      src="/images/asuransi.jpeg"
                      alt="Proteksi Asuransi PSU"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Label Floating Tag */}
                  <div className="absolute -top-4 -right-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] z-10">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                      Proteksi
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Asuransi Aset Penuh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
