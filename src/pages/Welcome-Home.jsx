// src/pages/Welcome-Home.jsx
import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Header1 from '../component/Header1';
import AboutConference from '../component/About_conference';
import AboutPune from '../component/About_Pune';
import Slideshow from '../component/Slideshow';
const WelcomeHome = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
{/* Navbar Section */}
      <section id="navbar">
        <Navbar />
      </section>
      {/* Footer Section */}
      <section id="header1">
        <Header1 />
      </section>
       {/* AboutPune Section */}
      <section id="aboutpune">
        <AboutPune />
      </section>

       {/* AboutConference Section */}
      <section id="aboutconference">
        <AboutConference />
      </section>

      
       {/* Slideshow Section */}
      <section id="slideshow">
        <Slideshow />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};
export default WelcomeHome;