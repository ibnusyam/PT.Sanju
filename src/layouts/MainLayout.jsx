import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      {/* Header akan selalu ada di atas */}
      <Navbar />

      {/* Outlet adalah tempat konten halaman (Home, About, dll) berubah-ubah */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer akan selalu ada di bawah */}
      <Footer />
    </div>
  );
};

export default MainLayout;
