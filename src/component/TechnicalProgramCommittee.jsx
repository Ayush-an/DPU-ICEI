import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

const technicalCommitteeMembers = [
  {
    name: 'Dr. Priya Sharma',
    designation: 'Professor, AI & ML',
    affiliation: 'Global Institute of Technology',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. Rohan Gupta',
    designation: 'Lead Scientist, Data Science',
    affiliation: 'Innovate Corp Research',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Prof. Anjali Desai',
    designation: 'Associate Professor, ECE',
    affiliation: 'National University',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. Vikram Singh',
    designation: 'Professor, Computer Vision',
    affiliation: 'State Engineering College',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. Sneha Reddy',
    designation: 'Researcher, NLP',
    affiliation: 'Center for Language Tech',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Prof. Arjun Mehta',
    designation: 'Head of Department, IT',
    affiliation: 'Premier Technical Institute',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. Meera Iyer',
    designation: 'Assistant Professor, CSE',
    affiliation: 'University of Applied Sciences',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. Sameer Khan',
    designation: 'Senior Scientist',
    affiliation: 'Advanced Computing Labs',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
];


// --- Reusable Components ---

/**
 * A card component to display information about a committee member.
 * @param {string} name - The member's name.
 * @param {string} designation - The member's designation or role.
 * @param {string} affiliation - The member's organization or university.
 * @param {string} imgSrc - URL for the member's photograph.
 */
const CommitteeMemberCard = ({ name, designation, affiliation, imgSrc }) => (
  <div className="text-center p-4">
    <div className="relative inline-block">
      <img
        src={imgSrc}
        alt={`Photo of ${name}`}
        className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/256x256/E2E8F0/4A5568?text=Photo+Not+Found'; }}
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-md font-semibold text-teal-600">{designation}</p>
    <p className="text-sm text-gray-500">{affiliation}</p>
  </div>
);

/**
 * A section component to display a group of committee members under a title.
 * @param {string} title 
 * @param {Array} members 
 */
const CommitteeSection = ({ title, members }) => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 pb-3 border-b-2 border-teal-300">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {members.map((member, index) => (
        <CommitteeMemberCard key={index} {...member} />
      ))}
    </div>
  </section>
);


// --- Main Page Component ---

function TechnicalProgramCommittee() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-58 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16">
            Technical Program Committee
          </h1>

          {/* Render the committee members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {technicalCommitteeMembers.map((member, index) => (
              <CommitteeMemberCard key={index} {...member} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
export default TechnicalProgramCommittee;