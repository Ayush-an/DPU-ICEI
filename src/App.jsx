import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./component/Header1";
import Slideshow from "./component/Slideshow";
import AboutConference from "./component/About_conference";
import AboutPune from "./component/About_Pune";
import WelcomeHome from "./pages/Welcome-Home";
import Footer from "./component/footer";
import AboutUS from "./component/AboutUS";
import Visionpage from "./component/Visionpage";
import CallForPaper from "./component/CallForPaper";
import ConferenceSchedule from "./component/ConferenceSchedule";
import OrganizingCommittee from "./component/OrganizingCommittee";
import TechnicalProgramCommittee from "./component/TechnicalProgramCommittee";

import Navbar from "./component/navbar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/visionpage" element={<Visionpage />}/>
        <Route path="/aboutus" element={<AboutUS />} />
      <Route path="/callforpaper" element={<CallForPaper />} />
            <Route path="/conferenceSchedule" element={<ConferenceSchedule />} />
                        <Route path="/organizingCommittee" element={<OrganizingCommittee />} />
                                                <Route path="/technicalProgramCommittee" element={<TechnicalProgramCommittee />} />





       <Route path="/aboutconference" element={<AboutConference />} />

       <Route path="/aboutpune" element={<AboutPune />} />
        <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/header1" element={<Header1 />} />
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/footer" element={<Footer />} />
        <Route path="/welcome" element={<WelcomeHome/>}/>
    </Routes>
    </Router>
  );
};
export default App;