import React from "react";
import { useLocation } from "react-router-dom";
import TopNav from "../../TopNav";
import Footer from "../../Footer";
import floorPlan from "./floorPlan.jpg";
import styles from "./viewPlan.css";

export default function ViewPlanify(props) {
  const location = useLocation();
  // const { id, color } = state; // Read values passed on state
  console.log(location);
  return (
    <>
      <TopNav></TopNav>
      <div className="view-plan-container">
        <h1> THis is the 2D image for your floor plan</h1>
        <img
          style={{ width: "470px", height: "400px" }}
          alt="image for"
          src={location.state}
        />
      </div>
      <Footer></Footer>
    </>
  );
}
