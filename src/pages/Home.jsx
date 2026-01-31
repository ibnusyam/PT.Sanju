import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="layout-container flex flex-col">
          <div className="px-4 md:px-10 lg:px-40 py-5 flex justify-center">
            <div className="w-full max-w-[1200px]">
              <div
                className="relative overflow-hidden rounded-xl bg-slate-900 text-white min-h-[560px] flex items-end justify-start p-8 md:p-16 bg-no-repeat bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url('/images/home.jpeg')`,
                  backgroundSize: "100% 100%", // Ini akan memaksa gambar tampil penuh mengikuti ukuran kontainer
                }}
              >
                <div className="relative z-10 max-w-2xl flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm border border-white/20 w-fit">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Solusi Parkir Modern
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                    PT. Parkindo Sanju Utama
                  </h1>
                  <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-[600px]">
                    Mengedepankan teknologi, transparansi, dan tenaga
                    profesional untuk pengelolaan parkir yang efisien dan
                    menguntungkan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link
                      to="/services"
                      className="flex h-12 items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white px-8 text-base font-bold transition-all shadow-lg shadow-blue-600/30"
                    >
                      Lihat Layanan
                    </Link>
                    <Link
                      to="/about"
                      className="flex h-12 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 text-base font-bold backdrop-blur-sm transition-all"
                    >
                      Tentang Kami
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                  <img
                    alt="Parking Management Team"
                    className="w-full h-auto object-contain rounded-xl shadow-lg"
                    src="/images/mitra.jpeg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">
                    Tentang PSU
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    Mitra Terpercaya Pengelolaan Parkir Anda
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <strong>PT. Parkindo Sanju Utama (PSU)</strong> adalah
                  perusahaan jasa perparkiran dan penyedia sistem parkir yang
                  telah berizin resmi. Kami merupakan evolusi dari PT Parkindo
                  Sanju Perdana, membawa standar baru dalam efisiensi
                  operasional.
                </p>
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Lihat Profil Lengkap
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-[1200px] flex flex-col gap-12">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-lg text-slate-600">
                Keunggulan layanan manajemen parkir kami yang dirancang khusus
                untuk kebutuhan properti modern.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Transparan",
                  desc: "Laporan real-time akurat yang dapat diakses via HP/PC kapan saja.",
                  icon: "visibility",
                  color: "blue",
                },
                {
                  title: "Layanan 24 Jam",
                  desc: "Penanganan keluhan cepat dan dapat dihubungi setiap hari.",
                  icon: "schedule",
                  color: "indigo",
                },
                {
                  title: "SDM Terlatih",
                  desc: "Personil berpengalaman, ramah, dan memiliki attitude mumpuni.",
                  icon: "badge",
                  color: "purple",
                },
                {
                  title: "Fleksibel",
                  desc: "Sistem yang dapat disesuaikan dengan kebutuhan lokasi.",
                  icon: "tune",
                  color: "orange",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-background-light p-6 hover:-translate-y-1 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-${item.color}-100 text-primary flex items-center justify-center mb-2`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
