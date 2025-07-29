import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
// Recommended image size: 256x256 pixels

const chiefPatrons = [
  {
    name: 'Dr. A. B. Sharma',
    designation: 'Vice Chancellor',
    affiliation: 'University of Technology',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. C. D. Verma',
    designation: 'Director',
    affiliation: 'Institute of Science',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
];

const generalChairs = [
    {
        name: 'Prof. E. F. Gupta',
        designation: 'Head of Department, CSE',
        affiliation: 'Engineering College',
        imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
    },
    {
        name: 'Prof. G. H. Iyer',
        designation: 'Professor, ECE',
        affiliation: 'National Institute of Tech',
        imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
    },
];

const organizingCommittee = [
  {
    name: 'Dr. I. J. Khan',
    designation: 'Associate Professor',
    affiliation: 'Tech University',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. K. L. Mehta',
    designation: 'Assistant Professor',
    affiliation: 'Science & Tech College',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Prof. M. N. Singh',
    designation: 'Professor',
    affiliation: 'University of Engineering',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Dr. O. P. Reddy',
    designation: 'Associate Professor',
    affiliation: 'Institute of Research',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
   {
    name: 'Dr. Q. R. Joshi',
    designation: 'Head of Research',
    affiliation: 'Advanced Studies Center',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
  {
    name: 'Prof. S. T. Kumar',
    designation: 'Professor, IT',
    affiliation: 'Tech Institute',
    imgSrc: 'https://placehold.co/256x256/E2E8F0/4A5568?text=Photo',
  },
];

/**
 * A card component to display information about a committee member.
 * @param {string} name 
 * @param {string} designation 
 * @param {string} affiliation 
 * @param {string} imgSrc 
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {members.map((member, index) => (
        <CommitteeMemberCard key={index} {...member} />
      ))}
    </div>
  </section>
);

// --- Main Page Component ---

function OrganizingCommittee() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-58 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12">
            Organizing Committee
          </h1>

          {/* Render each section of the committee */}
          <CommitteeSection title="Chief Patrons" members={chiefPatrons} />
          <CommitteeSection title="General Chairs" members={generalChairs} />
          <CommitteeSection title="Organizing Committee" members={organizingCommittee} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
export default OrganizingCommittee;