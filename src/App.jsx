// App.jsx

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contactus from "./components/ContctUs/Contactus";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Internships from "./components/Internship/Internship";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import "./App.css";
import InternshipForm from "./components/Internship/Internshipform";



function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Internships />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/internship_apply" element={<InternshipForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
