import React, { useEffect, useState } from "react";
import img1 from "../assets/img/Confrance/Conf1.png";
import img2 from "../assets/img/Confrance/Conf2.png";
import img3 from "../assets/img/Confrance/Conf3.png";
import img4 from "../assets/img/Confrance/Conf4.png";
import img5 from "../assets/img/Confrance/Mapro.png";
import img6 from "../assets/img/Confrance/conf_place.png";

const images = [img1, img2, img3, img4, img5, img6];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getSlideIndexes = () => {
    const total = images.length;
    return [
      (currentIndex - 2 + total) % total,
      (currentIndex - 1 + total) % total,
      currentIndex % total,
      (currentIndex + 1) % total,
      (currentIndex + 2) % total,
    ];
  };

  return (
    
    <div
      className="w-full max-w-7xl mx-auto py-8 flex flex-col items-center bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Slides */}
      <div className="relative flex items-center justify-center gap-6 transition-all duration-700 ease-in-out">
        {getSlideIndexes().map((imgIndex, position) => {
          let scale = "scale-90";
          let zIndex = "z-10";
          let translate = "";
          let opacity = "opacity-60";

          if (position === 2) {
            scale = "scale-110";
            zIndex = "z-30";
            opacity = "opacity-100";
          } else if (position === 1 || position === 3) {
            scale = "scale-100";
            zIndex = "z-20";
            opacity = "opacity-80";
            translate = position === 1 ? "-translate-x-2" : "translate-x-2";
          } else {
            translate = position === 0 ? "-translate-x-4" : "translate-x-4";
          }

          return (
            <div
              key={imgIndex}
              className={`transform transition-all duration-700 cursor-pointer ${scale} ${zIndex} ${translate} ${opacity}`}
              onClick={() => setCurrentIndex(imgIndex)}
            >
              <img
                src={images[imgIndex]}
                alt={`Slide ${imgIndex}`}
                className="w-[400px] h-[250px] object-cover rounded-xl shadow-xl border-4 border-transparent hover:border-blue-600"
              />
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-blue-600" : "bg-gray-400"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default Slideshow;