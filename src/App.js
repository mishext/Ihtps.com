import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import OurBusinessPage from "./Pages/OurBusinessPage/OurBusinessPage";
import TurnKeyProjectsPage from "./Pages/TurnkeyProjectsPage/TurnKey";
import BusinessOpp from "./Pages/BusinessOpp/BusinessOpp";
import ContactUS from "./Pages/ContactUs/ContactUs";
import { setLanguage } from "react-localization";
import strings from "./Translation/Translation";
import CustomHeader from "./Components/CustomHeader/CustomHeader";
import Machines from "./Pages/MachinesPage/Machines";
import ItemPage from "./Pages/ItemPage/ItemPage";


function App() {
  // const [englsih, setEnglish] = useState();
  // const [french, setFrench] = useState();
  // function setToEnglish() {
  //   strings.setLanguage("en");
  //   setEnglish();
  // }
  // function setToFrench() {
  //   strings.setLanguage("fr");
  //   setFrench();
  // }
 
  return (

   <Router>
       <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs"element={<AboutUsPage />}/>
        <Route path="/ourbusiness" element={<OurBusinessPage />} />
        <Route path="turnkey-projects" element={<TurnKeyProjectsPage />} />
        <Route path="business-opportunities" element={<BusinessOpp />} />
        {/* <Route path="contact-us" element={<ContactUS />} /> */}
        <Route path="/machines"  element={<Machines />} />
        <Route path="/itemPage" element={<ItemPage />} />
      </Routes>
        <Header />
        <Footer /> 
   </Router>
   
  );
}

export default App;
