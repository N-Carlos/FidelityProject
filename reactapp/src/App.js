import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/calculator";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import { createGlobalStyle } from "styled-components";
import Hedge from "./pages/hedgefundmain";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E0EAD1;
  }
`;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AccountsAndTrade" element={<About />} />
        <Route path="/PlanningAndAdvice" element={<Contact />} />
        <Route path="/Calculator" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/index" element={<Home />} />
        <Route path="/hedgefundmain" element={<Hedge />} />
      </Routes>
    </Router>
  );
}

export default App;
