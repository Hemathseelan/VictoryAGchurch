import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import FloatingButtons from "./components/FloatingButtons";
import Loader from "./components/Loader";
import Ministries from "./pages/Ministries";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Watch from "./pages/Watch";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


import { testFirebase } from "./firebase/test";
import { addMonthlyVerse } from "./firebase/addMonthlyVerse";
import { addYearlyVerse } from "./firebase/addYearlyVerse";
import { addSermons } from "./firebase/addSermons";
import { uploadMonthlyVerses } from "./firebase/seedMonthlyVerses";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
useEffect(() => {
  AOS.init({ duration: 700, once: true, offset: 60 });
}, []);

  return (
    <div className="font-body">
      <Loader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
    
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      <Route path="/ministries" element={<Ministries />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </div>
  );
}
