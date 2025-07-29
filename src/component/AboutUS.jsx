import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import principal from '../assets/img/aboutus/principalimg.png';
import chairman from '../assets/img/aboutus/chairmanimg.png';
import secretary from '../assets/img/aboutus/secretaryimg.png';

const AboutUS = () => {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-20 font-serif">
      {/* Navbar Section */}
      <section id="navbar" className="w-full">
        <Navbar />
      </section>

      <div className="w-full max-w-7xl mt-48"> {/* Added mt-8 for spacing from navbar */}
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 uppercase">
          About Us
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-12 rounded-full"></div> {/* Thicker, rounded separator */}

        {/* Chairman Section */}
        <div className="mb-20 "> {/* Added margin-bottom for spacing */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-8 uppercase">
            Chairman
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-gradient-to-br from-rose-500 via-purple-100 to-pink-300 p-6 rounded-lg shadow-lg"> {/* Added background, padding, shadow */}
            {/* Left section: Image and Name */}
            <div className="md:w-5/12 w-full flex flex-col items-center">
              <img
                src={chairman}
                alt="Chairman"
                className="rounded-lg shadow-md w-full max-w-xs md:max-w-none h-auto object-cover border-4 border-blue-200"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Chairman+Image';
                }}
              />
              <div className="mt-4 text-lg text-gray-900 font-semibold text-center">
                <p>Hon. Dr. P. D. Patil</p>
              </div>
            </div>
            {/* Right section: About Text */}
            <div className="md:w-7/12 w-full text-justify text-gray-700 leading-relaxed text-base"> {/* Adjusted text size and leading */}
              <p className="mb-4 text-xl font-bold text-gray-800">Chairman Message</p>
              <p className="mb-4">Dear Students,</p>
              <p className="mb-4">
                It’s my pleasure to state that Dr. D. Y. Patil Unitech at Pune is inculcating life meticulously & imparting the best in every field of knowledge in a more purposeful manner. I ensure the best education, for example, launching of innovative courses, ultramodern infrastructure, renowned & dedicated faculty, well-equipped labs, enriched & well–stocked libraries etc.
              </p>
              <p className="mb-4">
                In order to meet the global challenges of a more changing & demanding educational environment in the new century, Dr. D. Y. Patil Unitech is marching forward meticulously with goals for the all-round development of the students.
              </p>
              <p>
                So dear students, instead of swimming with the tide like dead fish, create your own waves & shine like stars. Wish You All The Best!!!
              </p>
            </div>
          </div>
        </div>

        {/* Secretary Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-8 uppercase">
            Secretary
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-gradient-to-br from-sky-400 via-purple-100 to-teal-600 p-6 rounded-lg shadow-lg">
            {/* Left section: About Text (Changed order for visual variety) */}
            <div className="md:w-7/12 w-full text-justify text-gray-700 leading-relaxed text-base">
              <p className="mb-4 text-xl font-bold text-gray-800">Secretary Message</p>
              <p className="mb-4">Dear Students,</p>
              <p className="mb-4">
                It is a great pleasure to express my views for all students wishing to embark a career at Dr. D. Y. Patil Arts, Commerce and Science College, Akurdi, Pune.
              </p>
              <p className="mb-4">
                I am happy to endorse that Dr. D. Y. Patil Arts, Commerce and Science College, Akurdi, Pune, is aware of the basic requirements for the successful running of various courses in a single shed. As a result, hi-tech laboratories with modern instruments for teaching and research work, a library of thousands of books, a technically advanced computer laboratory, and various departments are there to fulfill your crave for knowledge. In addition to this, the team constitutes of highly qualified and competent faculty with national and international experience in teaching and research. The center provides an ideal milieu for inter-disciplinary and collaborative research. The institution has maintained a very high standard of academic excellence and has an inspiring ambiance that promotes full utilization of an individual capacity and capability in the field of Arts, Commerce and Science. The institute hosts a number of fully equipped laboratories for performing modern techniques to provide overall and clear knowledge to the students. Along with academics, the institute hosts various co-curricular & extracurricular activities for the overall development of students. The college organizes state level trekking camp, biodiversity camp, wildlife census and such programs which help bridging the gap of field and class education.
              </p>
              <p>I am very happy to support teaching & research activities of the college and wish you all a pleasant & prosperous stay at DPU Family.</p>
            </div>
            {/* Right section: Image and Name */}
            <div className="md:w-5/12 w-full flex flex-col items-center">
              <img
                src={secretary}
                alt="Secretary"
                className="rounded-lg shadow-md w-full max-w-xs md:max-w-none h-auto object-cover border-4 border-blue-200"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Secretary+Image';
                }}
              />
              <div className="mt-4 text-lg text-gray-900 font-semibold text-center">
                <p>Hon. Dr. Somnath Patil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Principal Section */}
        <div className="mb-10"> {/* Adjusted margin for the last section */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-8 uppercase">
            Principal
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-gradient-to-br from-amber-400 via-purple-100 to-fuchsia-300 p-6 rounded-lg shadow-lg">
            {/* Left section: Image and Name */}
            <div className="md:w-5/12 w-full flex flex-col items-center">
              <img
                src={principal}
                alt="Principal"
                className="rounded-lg shadow-md w-full max-w-xs md:max-w-none h-auto object-cover border-4 border-blue-200"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x300/E0F2F7/2C3E50?text=Principal+Image';
                }}
              />
              <div className="mt-4 text-lg text-gray-900 font-semibold text-center">
                <p>Dr. Mohan B. Waman</p>
              </div>
            </div>
            {/* Right section: About Text */}
            <div className="md:w-7/12 w-full text-justify text-gray-700 leading-relaxed text-base">
              <p className="mb-4 text-xl font-bold text-gray-800">Principal Message</p>
              <p className="mb-4">Dear Students,</p>
              <p className="mb-4">
                "I welcome you to the College that stands for excellence and continuously sets the highest standards in teaching, learning, research and extension activities. I feel honored to be the Principal of Dr. D. Y. Patil Arts, Commerce and Science College, Akurdi, which extends opportunities to interact with the students, faculties & supporting staff regularly.
              </p>
              <p className="mb-4">
                The college was established in 2001 by Dr. D. Y. Patil Unitech Society (Formerly Dr. D. Y. Patil Vidya Pratishthan Society), founded in 1984. Today in its 20th year of establishment, the college is aiming to scale greater heights in the fields of education, research, sports, and social activities. The college got NAAC accreditation done in 2017 with ‘B++’ grade. The College has achieved an ISO 9001: 2015 & 14001: 2015 certificate for its quality policies and work ethics. The College has acquired 2(f) status of UGC, New Delhi. The college provides various academic facilities to attain bachelor degrees in the fields of Arts, Commerce, Science, and Business Administration, as well as Master degrees in Arts, Commerce, and Science.
              </p>
              <p className="mb-4">
                The college not only ensures academic development of the students but also provides them with opportunities to prove themselves by undertaking research, extra-curricular and co-curricular activities. The college is empowering talents through various student-centric activities. We are organizing State-level trekking camp since 1997 at Kalsubai-Harishchandragadh Wildlife sanctuary to build students' confidence, Wildlife census and Van-Chetana Camps to create affection towards wildlife and environment in youngsters, Swaccha Bharat Abhiyaan and NSS camp to make youth aware of problems of rural area, and so on. We always try to make human values and education go hand in hand as it is the only way to make a student a good citizen of tomorrow.
              </p>
              <p className="mb-4">
                Dear all, the year 2020 has not been easy for today’s young people. The education system has been disrupted due to the COVID-19 Pandemic; from online learning to online evaluation, you have been going through various problems now. But I am here to tell you: big changes are coming, and you need to be part of them. Online teaching process is convenient, flexible, and accessible to everyone. That is why, in this difficult phase we are trying to reach to our students with the help of online teaching methods.
              </p>
              <p className="mb-4">
                In a nut-shell, this message could be summed up by taking recourse to the invaluable saying that "Empowering Education": the motto of our Dr. D. Y. Patil Unitech Society.
              </p>
              <p>
                I would like to thank authorities of Dr. D. Y. Patil Unitech Society and each and every individual colleague for his/her valuable contribution in every achievement of the college. I express my deep sense of gratitude to the Chairman of the Society, Hon’ble Dr. P. D. Patil Sir; Vice-chairperson, Hon’ble Dr. Bhagyashree Tai Patil; Secretary, Hon’ble Dr. Somnath Dada Patil and Trustee, Hon’ble Dr. Smita Didi Jadhav for their valuable guidance and continuous encouragement. Wish you all the best for your bright future…!!!"
              </p>
            </div>
          </div>
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
export default AboutUS;