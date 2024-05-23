import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import "./index.css";
import "animate.css";
import MainPage from "./Pages/MainPage/MainPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ServiceSinglePage from "./Pages/ServiceSinglePage/ServiceSinglePage";
import WorkPage from "./Pages/WorkPage/WorkPage";
import ProjectSinglePage from "./Pages/ProjectSinglePage/ProjectSinglePage";
import AvailablePosition from "./Pages/AvailablePosition/AvailablePosition";
import NewsPage from "./Pages/NewsPage/NewsPage";
import SingleNewsPage from "./Pages/SingleNewsPage/SingleNewsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import OnTop from "./Components/OnTop/OnTop";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/about/positions" element={<AvailablePosition />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path={`/service/:title`} element={<ServiceSinglePage />} />
        <Route path={`/works`} element={<WorkPage />} />
        <Route path={`/work/:title`} element={<ProjectSinglePage />} />
        <Route path={`/news`} element={<NewsPage />} />
        <Route path={`/news/:title`} element={<SingleNewsPage />} />
        <Route path={`/contacts`} element={<ContactPage />} />
      </Routes>

      <OnTop />

      <Footer />
    </div>
  );
}

export default App;
