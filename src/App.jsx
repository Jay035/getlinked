import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-[#150E28] bg-no-repeat bg-hero bg-blend-hard-light bg-[-105px_3.278px]">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
