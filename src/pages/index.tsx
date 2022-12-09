import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./about";
import ContactPage from "./contact";
import HomePage from "./home";
import "./styles.css";

interface IProps {}

const Main: React.FC<IProps> = (props) => {
  return (
    <main className="home__wrapper">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default Main;
