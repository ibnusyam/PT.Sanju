import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-40 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            {/* Ukuran box logo diperbesar dan aspek rasionya dijaga */}
            <div className="flex h-14 w-auto items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Logo PT Parkindo Sanju Utama"
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
              Parkindo Sanju Utama
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {[
                { name: "Home", path: "/" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Layanan", path: "/services" },
                { name: "Partnership", path: "/partnership" },
                { name: "Portofolio", path: "/portfolio" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <a
              href="https://wa.me/6289604700013"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg h-11 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl font-bold">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4">
          {[
            { name: "Home", path: "/" },
            { name: "Tentang Kami", path: "/about" },
            { name: "Layanan", path: "/services" },
            { name: "Partnership", path: "/partnership" },
            { name: "Portofolio", path: "/portfolio" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold p-2 rounded-lg ${
                isActive(link.path)
                  ? "text-primary bg-blue-50"
                  : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="my-2 border-slate-100" />
          <a
            href="https://wa.me/6289604700013"
            className="w-full h-12 flex items-center justify-center bg-primary text-white rounded-xl font-bold shadow-md"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
