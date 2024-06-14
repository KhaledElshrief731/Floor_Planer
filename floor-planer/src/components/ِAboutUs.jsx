/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import '../App.css'
const AboutUs = () => {
  return (
    <div className="w-full bg-white pb-60" id="about-us">
    <section class="about-us" id="about-us">
    <div class="section-header">
      <h1 class="section-heading">About Us</h1>
      <div class="underline"></div>
    </div>
    <div class="services">
      <div class="service">
        <div class="service-header">
          <i class="fas fa-pen-nib"></i>
          <h3>Interior</h3>
        </div>
        <p class="service-text">
        Prompt: /imagine a 2D architectural floor plan for a luxury villa with open-concept living spaces. Use varying line weights to define the relationship between public and private areas. –v 5.2
        </p>
      </div>
      <div class="service">
        <div class="service-header">
          <i class="fas fa-paint-roller"></i>
          <h3>Exterior</h3>
        </div>
        <p class="service-text">
        Prompt: /imagine a 2D architectural floor plan (top-down view) for a futuristic circular residence 
        </p>
      </div>
      <div class="service">
        <div class="service-header">
          <i class="fas fa-pencil-alt"></i>
          <h3>Design</h3>
        </div>
        <p class="service-text">
        Prompt: /imagine a 2D architectural floor plan drawing for a one bedroom, ultra-compact mini home. Top-down view. 
        </p>
      </div>
      <div class="service">
        <div class="service-header">
          <i class="fas fa-paint-brush"></i>
          <h3>Decoration</h3>
        </div>
        <p class="service-text">
         Prompt: /imagine a 3D architectural floor plan for a coastal retreat with a flowing serpentine layout. Top-down view. 


        </p>
      </div>
      <div class="service">
        <div class="service-header">
          <i class="fas fa-ruler-combined"></i>
          <h3>Planning</h3>
        </div>
        <p class="service-text">
        Prompt: /imagine a 2D architectural floor plan (top-down view) for a cantilevered modernist residence on a steep hillside. 
        </p>
      </div>
      <div class="service">
        <div class="service-header">
          <i class="far fa-building"></i>
          <h3>Execution</h3>
        </div>
        <p class="service-text">
        Prompt: /imagine a 3D architectural floor plan drawing (top-down view) for a contemporary treehouse-inspired residence with interconnected bridges. 
        </p>
      </div>
      <div class="about-us-img-wrapper">
        <img alt='logo' src="https://res.cloudinary.com/daesz5k6b/image/upload/v1706480246/kbisczlfdbvdutp3dwqn.jpg" />
      </div>
    </div>
  </section>
    </div>
  );
};

export default AboutUs;
