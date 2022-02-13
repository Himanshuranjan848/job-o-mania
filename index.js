import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import LandingPageComponent from "./pages/landingpage/LandingPageComponent";
import HomePage from "./pages/homepage/HomePage";
import ProfilePage from './pages/profilepage/ProfilePage'

ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPageComponent />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/profilepage/:username" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
