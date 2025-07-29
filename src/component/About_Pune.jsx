import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import DPU_1 from '../assets/img/DPU/DPU-1.png';
import DPU_2 from '../assets/img/DPU/DPU-2.png';
import DPU_3 from '../assets/img/DPU/DPU-3.png';
import DPU_4 from '../assets/img/DPU/DPU-4.png';
import DPU_5 from '../assets/img/DPU/DPU-5.png';
import cfvideo from '../assets/video/DPU-Video.mp4';

const AboutPune = () => {
  const places = [
    { name: 'Traditional', imageUrl: DPU_2 },
    { name: 'Cultural Function', imageUrl: DPU_3 },
    { name: 'Play Ground', imageUrl: DPU_4 },
    { name: 'RAJ GAD', imageUrl: DPU_5 },
    { name: 'NSS CLEAN INDIA', imageUrl: DPU_1 },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-1 font-inter">
      <div className="w-full px-4 lg:px-12">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-900">ABOUT DYP-DPU</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Check out gallery of DYP-DPU College</p>
        <div className="border-b-4 border-blue-500 w-24 mx-auto mb-10"></div>

        {/* Fullscreen Slideshow */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-full h-56 rounded-lg overflow-hidden shadow-md mb-3">
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/300x200/B3E5FC/01579B?text=${place.name.replace(/\s/g, '+')}`;
                    }}
                  />
                </div>
                <p className="text-gray-800 font-semibold text-lg">{place.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Video Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">Check out the video of DYP-DPU</p>
          <div className="border-b-4 border-blue-500 w-24 mx-auto mb-8"></div>

          <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={cfvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPune;