import React from "react";
import LandingPageComponent from "./pages/landingpage/LandingPageComponent";
import "./styles.css";
import LoginPage from "./pages/loginpage/LoginPage";
import Leaderboard from './pages/homepage/Leaderboard';
import GroupSection from "./pages/homepage/GroupSection";
import Chat from "./pages/homepage/Chat";
import HomePage from "./pages/homepage/HomePage";

function App() {

  const user1 = {
    name:"Yash",
    rank:100
  }
  const user2 = {
    name:"Himanshu",
    rank:50
  }
  const users = [user1, user2,user1,user2,user1,user2,user1,user2,user1,user2,user1,user1, user2,user1,user2,user1,user2];

  const user = {
      groups : ["The waves", "Coders Hub", "Lets Code Together","NIT Patna coders club","NIT Trichy Warriors","The waves", "Coders Hub", "Lets Code Together","NIT Patna coders club","NIT Trichy Warriors"]
  }
   
  return (
      // <LandingPageComponent/>
      // <LoginPage/>
      // <Leaderboard users={users}/>
      // <GroupSection user={user}/>
      // <Chat/>
      <HomePage/>
  );
}

export default App;

