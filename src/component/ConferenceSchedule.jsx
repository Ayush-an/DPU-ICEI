import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

// Data for Day 1 Schedule
const day1Schedule = [
  { time: '10:00 AM - 10:20 AM', title: 'Welcome & Inauguration', speaker: '' },
  { time: '10:20 AM - 11:00 AM', title: 'Key Note Speech', speaker: 'Shri Vaman Sir, Shri Mukesh Tiwari, Shri Sandeep Warde' },
  { time: '11:00 AM - 12:00 PM', title: 'Inspirational Talk: Building Believe', speaker: 'Pawan Verma' },
  { time: '12:00 Noon - 1:00 PM', title: 'Expert Talk – Yogesh/XX', speaker: '' },
  { time: '1:00 PM - 2:00 PM', title: 'Lunch', speaker: '' },
  { time: '2:00 PM - 2:30 PM', title: 'Fun Activity', speaker: '' },
  { time: '2:30 PM - 3:30 PM', title: 'Demystifying AI, Basics for everyone', speaker: 'Pawan Verma' },
  { time: '3:30 PM - 4:00 PM', title: 'Group Activity', speaker: '' },
  { time: '4:00 PM - 4:15 PM', title: 'Tea Break & Networking', speaker: '' },
  { time: '4:15 PM - 5:00 PM', title: 'AI – Myth Sessions Q&A', speaker: 'Pawan Verma' },
];

// Data for Day 2 Schedule
const day2Schedule = [
  { time: '10:00 AM - 11:00 AM', title: 'Expert Talk – YY/ZZ', speaker: '' },
  { time: '11:00 AM - 1:15 PM', title: 'Paper presentation - 6', speaker: '10 mins + 2 mins Q&A each' },
  { time: '1:15 PM - 2:15 PM', title: 'Lunch', speaker: '' },
  { time: '2:15 PM - 2:30 PM', title: 'Fun Activity', speaker: '' },
  { time: '2:30 PM - 3:30 PM', title: 'Panel Discussion: AI for Academics/Edu', speaker: 'Moderator: Pawan Verma' },
  { time: '3:30 PM - 4:15 PM', title: 'Group Activity: Ethical AI Mind Mapping', speaker: 'Facilitator: Pawan Verma' },
  { time: '4:15 PM - 4:30 PM', title: 'Tea Break & Networking', speaker: '' },
  { time: '4:30 PM - 5:00 PM', title: 'Winner Announcement', speaker: 'Sandeep Warde' },
];

// Data for Day 3 Schedule
const day3Schedule = [
  { time: '10:00 AM - 11:00 AM', title: 'Expert Talk', speaker: 'AA/BB' },
  { time: '11:15 AM - 12:30 PM', title: 'Panel Discussion: Ethics, Society and AI', speaker: '' },
  { time: '12:30 PM - 1:00 PM', title: 'Creative Activity: AI product pitch', speaker: '' },
  { time: '1:00 PM - 2:00 PM', title: 'Lunch', speaker: '' },
  { time: '2:15 PM - 2:30 PM', title: 'Fun Activity', speaker: '' },
  { time: '2:30 PM - 3:30 PM', title: 'Group Activity', speaker: '' },
  { time: '3:30 PM - 4:30 PM', title: 'Research Paper Presentation - 4', speaker: '10 mins + 2 mins Q&A each' },
  { time: '4:30 PM - 5:30 PM', title: 'Closing Ceremony & Winner Announcement', speaker: 'Pawan Verma' },
];


// Component to render a single schedule item in the timeline
const ScheduleItem = ({ time, title, speaker, isLeft }) => {
  // Base classes for all items
  const containerClasses = "relative w-full md:w-1/2 mb-6 md:mb-8 flex";
  // Alignment classes based on isLeft prop
  const alignmentClasses = isLeft ? "md:justify-end md:pr-8" : "md:self-end md:pl-8";
  const contentAlignment = isLeft ? "md:text-right" : "md:text-left";
  const borderClass = isLeft ? "border-r-4" : "border-l-4";

  return (
    <div className={`${containerClasses} ${alignmentClasses}`}>
      {/* Timeline Dot */}
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full ${isLeft ? 'right-[-8px]' : 'left-[-8px]'}`}></div>
      
      {/* Content Box */}
      <div className={`w-full md:max-w-md bg-white p-4 rounded-lg shadow-md ${borderClass} border-teal-500 hover:shadow-xl transition-shadow duration-300`}>
        <p className={`text-sm font-semibold text-teal-600 mb-1 ${contentAlignment}`}>{time}</p>
        <h3 className={`text-lg font-bold text-gray-800 ${contentAlignment}`}>{title}</h3>
        {speaker && <p className={`text-sm text-gray-500 mt-2 ${contentAlignment}`}>🎤 {speaker}</p>}
      </div>
    </div>
  );
};

// Component to render a full day's timeline
const DayTimeline = ({ day, title, schedule }) => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{`DAY ${day}`}</h2>
    <h3 className="text-xl font-semibold text-center text-teal-600 mb-12 pb-3 border-b-2 border-teal-200">{title}</h3>

    <div className="relative w-full max-w-4xl mx-auto">
      {/* The Vertical Timeline Bar */}
      <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-gray-300 -translate-x-1/2"></div>

      <div className="flex flex-col md:flex-row flex-wrap">
        {schedule.map((item, index) => (
          <ScheduleItem
            key={index}
            time={item.time}
            title={item.title}
            speaker={item.speaker}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  </section>
);


// Main Conference Schedule component
function ConferenceSchedule() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12">
            Conference Schedule
            <span className="block text-2xl text-teal-600 font-medium mt-2">ICEI-2026</span>
          </h1>

          <DayTimeline day={1} title="Foundation & Belief Building" schedule={day1Schedule} />
          <DayTimeline day={2} title="Exploration & Interaction" schedule={day2Schedule} />
          <DayTimeline day={3} title="Insight & Application" schedule={day3Schedule} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default ConferenceSchedule;