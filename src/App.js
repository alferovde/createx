import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import { Route, Routes } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainPage />,
  //   },
  //   {
  //     path: "/service",
  //     element: <ServicesPage />,
  //   },
  // ]);

  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service" element={<ServicesPage />} />
      </Routes>

      {/* <RouterProvider router={router} /> */}
      <Footer />
    </div>
  );
}

export default App;
