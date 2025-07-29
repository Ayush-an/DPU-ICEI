import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

// Main component for the Call for Papers page
function CallForPaper() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use flex-col to stack navbar, content, and footer */}
      {/* Navbar Section */}
      <section id="navbar">
        <Navbar />
      </section>

      {/* Main Content Area */}
      {/* Added pt-16 to push content down, assuming Navbar height is around 4rem (64px) */}
      <div className="flex-grow bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-20  font-sans pt-56">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-8">
            Call for Papers - ICEI-2025
          </h1>

          {/* Important Dates Section */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Important Dates
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    {/* Table headers for Event and Date */}
                    <th className="py-3 px-4 text-left text-sm sm:text-base font-medium rounded-tl-lg">Event</th>
                    <th className="py-3 px-4 text-left text-sm sm:text-base font-medium rounded-tr-lg">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Table rows for important dates */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Paper Submission deadline</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">July 15, 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Notification of Acceptance</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Sept 25, 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Camera Ready paper submission</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Oct 25, 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Main Conference</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Nov 25, 2025 - January 09-11, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Topics Section */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Conference Tracks
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ICAIAP 2025 covers a broad spectrum of topics related to emerging trends and innovations in applied sciences, research papers are invited from the following areas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
              <li><span className="font-medium text-indigo-700">Track 1:</span> Data Analytics</li>
              <li><span className="font-medium text-indigo-700">Track 2:</span> Artificial Intelligence, Machine Learning & Computational Intelligence</li>
              <li><span className="font-medium text-indigo-700">Track 3:</span> Applications of Artificial Intelligence in applied sciences</li>
              <li><span className="font-medium text-indigo-700">Track 4:</span> Artificial Intelligence in education</li>
            </ul>
          </section>

          {/* Registration Charges Table */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Registration Charges
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To participate in Conference as Author/ Attendee, the registration charges are as follows:
            </p>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-indigo-500 text-white">
                  <tr>
                    {/* Table headers for Category, Indian, and Foreign charges */}
                    <th className="py-3 px-4 text-left text-sm sm:text-base font-medium rounded-tl-lg">Category</th>
                    <th className="py-3 px-4 text-left text-sm sm:text-base font-medium">Indian (including 18% GST)</th>
                    <th className="py-3 px-4 text-left text-sm sm:text-base font-medium rounded-tr-lg">Foreign (including 18% GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Table rows for registration categories */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">IEEE member</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">₹6,000/-</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">$125</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Others</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">₹8,000/-</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">$175</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">Attendees</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">₹1,200/-</td>
                    <td className="py-3 px-4 text-sm sm:text-base text-gray-800">$50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Author Instructions Section */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Author Instructions
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Please comply with the following guidelines:</p>
              <p>Submitted papers should be written in English, including all figures, tables, references, and appendices.</p>
              <p>The paper must discuss only new and previously unpublished results. The paper must be formatted according to the <strong className="text-indigo-700">IEEE Manuscript Templates for Conference Proceedings</strong>, have a minimum of four pages, and must not exceed 6 pages, including figures and references.</p>
              <p>The paper must address at least one category specified in the Call for Papers.</p>
            </div>
          </section>

          {/* Submission Section */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Submission
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>All submissions must be made through the Online Submission System (CMT) using the following link: <a href="https://cmt3.research.microsoft.com/ICEI2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://cmt3.research.microsoft.com/ICEI2026</a>. Submissions cannot be accepted via email.</p>

              <p className="font-semibold text-gray-800">Submit Two Copies of Your Paper:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="font-medium text-indigo-700">a) Complete Paper in PDF Format:</span> Please submit the full paper in PDF format, including author names, affiliations, and acknowledgments.</li>
                <li><span className="font-medium text-indigo-700">b) Anonymized Paper in PDF Format:</span> Submit a second version of your paper without any author names, affiliations, or other identifying information. Please prefix the file name with the word "Blind_" (e.g., Blind_PaperTitle.pdf).
                  This version should ensure that no reviewer can identify the authors. This includes:
                  <ul className="list-circle list-inside ml-6 space-y-1 mt-1">
                    <li>Removing names from the title page, headers, and throughout the document.</li>
                    <li>Replacing any self-references (e.g., "As we showed in [Author et al., Year]") with neutral descriptions like "Previous work has shown..."</li>
                    <li>Removing any acknowledgments that might reveal the authors' identities.</li>
                  </ul>
                </li>
              </ul>
              <p>For any query or submission problem please contact us via email: <a href="mailto:sandeepkumar@dypvp.edu.in" className="text-blue-600 hover:underline">sandeepkumar@dypvp.edu.in</a>.</p>
            </div>
          </section>

          {/* Additional Guidelines Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 border-b-2 border-indigo-300 pb-2">
              Additional Guidelines
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">Originality Detection:</h3>
              <p>Authors must ensure that their submissions are original and not previously published or under consideration elsewhere. All submitted papers will undergo a thorough plagiarism check, covering both plagiarism and self-plagiarism, regardless of whether previous publications are within or outside IEEE. We are committed to maintaining originality and only accept original articles. Any paper found to contain plagiarized content may be rejected at any stage. Authors are responsible for ensuring the originality of their work, and any content derived from other sources must be properly cited or quoted. For more information refer <a href="https://www.ieee.org/publications/rights/plagiarism/faqs-plagiarism.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IEEE page – Plagiarism FAQs</a>.</p>

              <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">Language Check:</h3>
              <p>Authors are encouraged to thoroughly check the spelling and grammar of their papers before submission to ensure clarity and readability for editors, reviewers, and future readers.</p>

              <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">Topic of Interest:</h3>
              <p>The content of the paper must align with the conference's central theme and fall within its designated scope. Submissions that do not demonstrate clear relevance to the conference's objectives and scope will not be considered for review and will be automatically rejected.</p>

              <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">Presentation:</h3>
              <p>Presentation at the conference is mandatory for all accepted papers. Papers not presented during the conference will be marked as "no-show" and will be excluded from post-conference publications and distributions.</p>
              <p>All papers that are accepted, properly registered, and successfully presented at the conference will be submitted to IEEE for potential inclusion in the IEEE Xplore® digital library.</p>
              <p>Each speaker will be allocated a 20-minute time slot, comprising their presentation and a dedicated question-and-answer period. Presenters are advised to structure their talks accordingly to allow sufficient time for audience interaction.</p>

              <p className="mt-6 text-sm text-gray-600 italic">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
export default CallForPaper;