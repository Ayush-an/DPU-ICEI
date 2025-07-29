import React from 'react';
import concoranceimg from '../assets/img/DPU-IMG2.png';

const AboutConference = () => {
  return (
    <div className="bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-20 font-serif">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-2 uppercase">
          About Conference
        </h1>
        <div className="w-20 h-1 bg-gray-700 mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left section: Image and Dates */}
          <div className="md:w-5/12 w-full">
            <img
              src={concoranceimg}
              alt="Conference Venue"
              className="rounded-md shadow-md w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Conference+Image';
              }}
            />
            <div className="mt-5 text-sm text-black leading-relaxed">
              <p><strong>Important Dates: Sept 19 to 21, 2025</strong></p>
            </div>
          </div>

          {/* Right section: About Text */}
          <div className="md:w-7/12 w-full text-justify text-black leading-loose text-[15.5px]">
            <p className="mb-4">
              <strong> DR. D.Y PATIL UNITECH SOCIETY'S DR. D.Y. PATIL ARTS, COMMERCE & SCIENCE COLLEGE and DR. D.Y PATIL SCIENCE AND COMPUTER SCIENCE COLLEGE, AKURDI, PUNE </strong> is organising a 1<sup>st</sup> edition of the International Conference on Emerging trends and Innovations in ICT (ICEI-2025) from <strong>19<sup>th</sup> to 21<sup>st</sup> September 2025</strong>.
            </p>
            <p className="mb-4">
              ICEI-2025 has leading researchers, academicians and industrialists of international repute on its advisory board. ICEI-2025 has invited researchers, academicians, professionals, practitioners, and students to impart and share their knowledge in the form of high-quality original research papers proposing novel solutions and case studies addressing the current real-life problems.
            </p>
            <p>
              This conference has Keynote speeches, Industrial workshops, Tutorials, and Panel discussions on current trends in various domains. ICEI-2025 has 7 tracks to cover all topics related to emerging trends and innovations in ICT. The Conference will be conducted mainly in offline mode. Online mode option will be available for international participants.
            </p>
          </div>
        </div>
        
        {/* Moved this divider inside the main content container and adjusted margin */}
        <div className="border-b-4 border-blue-500 w-24 mx-auto mt-12"></div>
        
      </div>
    </div>
  );
};
export default AboutConference;