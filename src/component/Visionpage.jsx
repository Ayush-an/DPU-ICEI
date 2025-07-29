import React from 'react';
import Footer from '../component/footer';
import collagelog from '../assets/img/DPU_logo.png';

const Visionpage = () => {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-inter text-gray-800 animate-fade-in">
      {/* Tailwind CSS for custom animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      <div className="w-full max-w-5xl mx-auto">
        {/* Logo and Institution Info */}
        <div className="flex flex-col items-center mb-12 text-center animate-slide-in-up delay-100">
          <img
            src={collagelog}
            alt="Institution Logo"
            className="w-40 h-auto sm:w-48 md:w-56 mb-6 drop-shadow-lg" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/200x200/A7D9F7/003366?text=LOGO';
            }}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-2 leading-tight">
            Dr. D.Y. PATIL UNITECH SOCIETY'S
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-1">
            Dr. D.Y. Patil Arts, Commerce & Science College,
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-1"> {/* Separated into its own paragraph */}
            Dr. D.Y. Patil Science & Computer Science College,
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Akurdi, Pune 411 044
          </p>
        </div>

        {/* Main Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-800 mb-10 uppercase animate-slide-in-up delay-200">
          Vision, Mission, Objectives
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16 rounded-full animate-slide-in-up delay-300"></div> {/* Enhanced separator */}

        {/* Mission Section */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl mb-16 max-w-4xl mx-auto border-t-4 border-blue-600 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-slide-in-up delay-400">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
            Mission
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            “To provide a skill-based, technical, innovative educational
            environment for creating global competencies and to bridge the gap
            between industry and academics to convert raw students into techno
            savvy and competent resources in all the disciplines.”
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl mb-16 max-w-4xl mx-auto border-t-4 border-indigo-600 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-slide-in-up delay-500">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6 text-center">
            Vision
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            “To impart skill-based, value-based and technical knowledge to make our students responsible, knowledgeable and competent citizens of society.”
          </p>
        </div>

        {/* Objectives Section */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl mb-12 max-w-4xl mx-auto border-t-4 border-purple-600 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-slide-in-up delay-600">
          <h3 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
            Objectives
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-4">
            <li>
              To give educational and skill-building opportunities through
              various disciplines of knowledge in the arts, commerce, and
              science.
            </li>
            <li>
              To improve students' employability by providing an innovative
              educational environment.
            </li>
            <li>
              To provide pupils with opportunities to acquire a sense of
              culture and morals to foster a sense of social responsibility.
            </li>
            <li>
              To provide students an advantage in their global competency
              through well-equipped facilities and technical-based education.
            </li>
            <li>
              Encourage pupils to participate in extracurricular activities to
              showcase their artistic talent and skills.
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};
export default Visionpage;