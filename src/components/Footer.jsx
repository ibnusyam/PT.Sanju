const Footer = () => {
  return (
    <footer class="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div class="px-4 md:px-10 lg:px-40 py-12 lg:py-16 flex justify-center">
        <div class="w-full max-w-[1200px]">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-2 text-white">
                <span class="material-symbols-outlined text-3xl text-primary">
                  local_parking
                </span>
                <span class="text-2xl font-extrabold">PSU</span>
              </div>
              <p class="text-sm leading-relaxed">
                PT. Parkindo Sanju Utama. Solusi Parkir Modern, Terintegrasi,
                dan Transparan.
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-white font-bold text-lg">Perusahaan</h3>
              <div class="flex flex-col gap-3">
                <a
                  href="about.html"
                  class="hover:text-primary transition-colors text-sm"
                >
                  Tentang Kami
                </a>
                <a
                  href="portfolio.html"
                  class="hover:text-primary transition-colors text-sm"
                >
                  Portofolio
                </a>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-white font-bold text-lg">Layanan</h3>
              <div class="flex flex-col gap-3">
                <a
                  href="services.html"
                  class="hover:text-primary transition-colors text-sm"
                >
                  Sistem Parkir
                </a>
                <a
                  href="services.html"
                  class="hover:text-primary transition-colors text-sm"
                >
                  Jual Alat Parkir
                </a>
                <a
                  href="services.html"
                  class="hover:text-primary transition-colors text-sm"
                >
                  Pengelolaan
                </a>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-white font-bold text-lg">Hubungi Kami</h3>
              <div class="flex flex-col gap-4">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <p class="text-sm">
                    Kec. Rancaekek, Kab. Bandung,
                    <br />
                    Jawa Barat
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary">
                    call
                  </span>
                  <p class="text-sm">0896-0470-0013</p>
                </div>
              </div>
            </div>
          </div>
          <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm">
              © 2026 PT Parkindo Sanju Utama. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
