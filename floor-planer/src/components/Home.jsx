import React from "react";
import '../App.css'
import TopNav from "./TopNav";
import AboutUs from "./ِAboutUs";
import Footer from "./Footer";
import Landing from "./Landing";
import  Articles from "./Articles";

const Home = () => {
  return (
    <div >
    <TopNav/>
    <Landing/>
    <AboutUs/>
    <Articles/>
    <Footer/>
    </div>
  );
};

export default Home;
