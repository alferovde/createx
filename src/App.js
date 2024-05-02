import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./index.css";
import "animate.css";
import MainPage from "./Pages/MainPage/MainPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUsPage />} />

        <Route path="/service" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
