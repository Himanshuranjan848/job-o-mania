import './App.css';
import Profile from './pages/user/Profile';
import Company from './pages/company/Company';
import Jobs from './pages/jobs/Jobs';
import Stats from './pages/statistics/Stats';
import Auth from './pages/Auth/Auth';
import AuthCompany from './pages/AuthCompany/AuthCompany'
import Landing from './pages/Landing/Landing';
import Eror from './components/Eror'
import AboutPage from './pages/About/AboutPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landing></Landing>} exact></Route>
        <Route path="/profile" element={<Profile></Profile>} exact></Route>
        <Route path="/auth" element={<Auth></Auth>} exact></Route>
        <Route path="/authCompany" element={<AuthCompany></AuthCompany>} exact></Route>
        <Route path="/dashboard" element={<Jobs></Jobs>} exact></Route>
        <Route path="/stats" element={ <Stats></Stats>} exact ></Route>
        <Route path="/company" element={ <Company></Company>} exact></Route>
        <Route path="/about" element={<AboutPage/>} exact></Route>
        <Route path="/:anything" element={<Eror/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;