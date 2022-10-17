import React, { useState } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import OurBusinessPage from "./Pages/OurBusinessPage/OurBusinessPage";
import TurnKeyProjectsPage from "./Pages/TurnkeyProjectsPage/TurnKey";
import BusinessOpp from "./Pages/BusinessOpp/BusinessOpp";
import ContactUS from "./Pages/ContactUs/ContactUs";
import Machines from "./Pages/MachinesPage/Machines";
import ItemPage from "./Pages/ItemPage/ItemPage";
import Error404 from "./Pages/404/Error404";
import { useTranslation } from "react-i18next";
import "./i18n.js";
import "./App.css";

function App() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  const onChangeLang = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home lang={language} />} />
        <Route path="/aboutUs" element={<AboutUsPage lang={language} />} />
        <Route
          path="/ourbusiness"
          element={<OurBusinessPage lang={language} />}
        />
        <Route
          path="turnkey-projects"
          element={<TurnKeyProjectsPage lang={language} />}
        />
        <Route
          path="business-opportunities"
          element={<BusinessOpp lang={language} />}
        />
        <Route path="contact-us" element={<ContactUS lang={language} />} />
        <Route path="/UsedLines" element={<Machines lang={language} />} />
        <Route
          path="/UsedLines/products/:endpoint"
          element={<ItemPage lang={language} />}
        />
        <Route path="*" element={<Error404 />} />
        {/* <Route path="/404" element={<Error404 />} />
        <Navigate to="/404" /> */}
      </Routes>
      <Header onChange={onChangeLang} lang={language} />
      <Footer lang={language} />
    </Router>
  );
}

export default App;
