import React from 'react';
import CollegeImg from '../assets/img/DPU.png';
import { useNavigate } from "react-router-dom";

const Header1 = () => {
  const navigate = useNavigate();
  return (
<div className="w-full overflow-x-hidden font-sans bg-white">
      {/* -------------------- Hero Section -------------------- */}
          <section
          className="relative w-full h-[450px] mt-[150px] bg-cover bg-center"
          style={{ backgroundImage: `url(${CollegeImg})` }}
        >
          <div className="flex flex-col items-center justify-center h-full px-4 text-center">
            <h1 className="mb-4 text-5xl font-extrabold tracking-wide text-white uppercase lg:text-7xl drop-shadow-xl">
              ICEI-202<span className="text-8xl">5</span>
            </h1>
            <p className="text-2xl font-light tracking-wider text-white lg:text-3xl drop-shadow">
              1<sup>st</sup> International Conference on Emerging Trends and Innovations in DYP-DPU (ICEI-2025)
              <br />
              <span className="mt-2 block font-semibold">19<sup>th</sup>-21<sup>st</sup> September 2025, Baha'i Academy, Panchgani</span>
            </p>
          </div>
        </section>
       <div className="border-b-4 border-blue-500 w-24 mx-auto mb-10"></div>
    </div>
  );
};

export default Header1;