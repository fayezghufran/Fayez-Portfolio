import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footers/Footer";
import AllProjects from "./components/MyProjects/AllProjects";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
