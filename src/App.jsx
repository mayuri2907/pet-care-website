import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Services from "./Pages/Service";
import Doctors from "./Pages/Doctors";
import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fffaf3] text-[#3d2b1f]">
        
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;