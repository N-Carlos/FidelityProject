import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import { createGlobalStyle } from "styled-components";
import Hedge from "./pages/hedgefundmain";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E0EAD1;
  }
`;
function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
      <GlobalStyle /> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/index" element={<Home />} />
        <Route path="/hedgefundmain" element={<Hedge/>} />
      </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
