const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="px-4 md:px-10 lg:px-40 py-12 lg:py-16 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-white">
                {/* Logo Image Lokal */}
                <img
                  src="/images/logo.png"
                  alt="Logo PT Parkindo Sanju Utama"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xl font-extrabold leading-tight">
                  Parkindo Sanju Utama
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                PT. Parkindo Sanju Utama. Solusi Parkir Modern, Terintegrasi,
                dan Transparan.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Perusahaan</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="/about"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Tentang Kami
                </a>
                <a
                  href="/portfolio"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Portofolio
                </a>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Layanan
                </a>
                <a
                  href="/partnership"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Partnership
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Layanan</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="/services"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Sistem Parkir
                </a>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Jual Alat Parkir
                </a>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Pengelolaan
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-lg">Hubungi Kami</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <p className="text-sm">
                    Kec. Rancaekek, Kab. Bandung,
                    <br />
                    Jawa Barat
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                  <a
                    href="https://wa.me/6289604700013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors font-bold"
                  >
                    0896-0470-0013
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 PT Parkindo Sanju Utama. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
