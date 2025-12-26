import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks'; 
import Process from '../components/Process';
import WhyTranga from '../components/WhyTranga';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import PartnersSection from '../components/PartnersSection';
import { Title, Meta, Link } from "react-head";
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';
import BlinkingStars from '../components/BlinkingStars'; 

const Home = () => {
  return (
    
    <div className='bg-gradient-to-br from-teal-100 via-blue-100 to-violet-200' >
    <Navigation/>
      <Hero />

      {/* --- First Gradient Section --- */}
      <div className="">
        {/* Added div wrappers with IDs for scrolling */}
        {/* <div id="how-it-works" className='px-1' ><HowItWorks /></div> */}
        {/* <div id="discover-the-machine" className='px-1'><DiscoverTheMachine /></div> */}
       
        <ProductShowcase />

        <div id="process" className='' ><Process /></div>
        <div id="why-tranga"  ><WhyTranga /></div>
      </div>

      {/* --- Second Gradient Section --- */}
      <div className=''>
        {/* Added div wrappers with IDs for scrolling */}
        <div id="about-us" className=''><AboutUs /></div>
      </div>
        <div id="contact"><Contact /></div>
        <div id="partners"><PartnersSection /></div>
        <Footer></Footer>
    </div>
  );
};

export default Home;