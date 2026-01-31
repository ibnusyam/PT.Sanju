import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Import halaman (Buat file dummy dulu jika belum ada isinya)
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Semua route di dalam sini akan menggunakan MainLayout (Ada Header & Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
