import React from "react";
import VideoBackground from "../video/video";
import '../App.css'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container ">
      <header className="header " id="home">
        <div className="img-wrapper z-10 ">
          <VideoBackground className=" w-full h-full" alt="background"></VideoBackground>
        </div>
        <div className="banner">
          <h1>Ai-Architect </h1>
          <p>AI Architecture: 24 Floor Plans for Modern Houses (Prompts Included)</p>
          <Link to ="/src/components/studio/ViewPlanify/ViewPlanify.jsx">
          <button>Draw Now</button>
          </Link>
          
        </div>
      </header>
    </div>
  );
};

export default Landing;
