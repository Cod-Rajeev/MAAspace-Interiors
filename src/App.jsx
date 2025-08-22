
import React from "react";
import Navbar from "./navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Services from "./Services/Services";
import AllLink from "./Home/AllLink";
import Footer from "./footer/Footer";
import ConsultationBooking from "./ConsultationBooking/ConsultationBooking";
import AboutUs from "./AboutUs/AboutUs";
import Designs from "./DesignData/Designs";
import DesignById from "./DesignData/DesignById";
import Blog from "./Blogs/Blog";
import PortFolio from "./PortFolio/PortFolio";
import WhatsAppIcon from "./whatsAppIcon";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-[95px]">
        <Routes>
          <Route path="/" element={<AllLink />} />
          <Route path="/services" element={<Services />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/designs/:id" element={<DesignById />} />

          <Route path="/gallery" element={<PortFolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/ConsultationBooking"
            element={<ConsultationBooking />}
          />
        </Routes>
        <WhatsAppIcon/>
      </div>

      <Footer />
    </>
  );
}

export default App;
