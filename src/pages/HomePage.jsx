/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import ButtonElement from "../components";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground"; // Import komponen partikel

const HomePage = () => {
  return (
    <div className="home-page relative h-screen w-full bg-black text-white">
    <ParticleBackground />

      {/* Navbar */}
      <Navbar className="navbar z-10" />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center justify-center h-full relative z-10">
        <h2 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-bold">
          Hi, I’m Sebastian Luth
        </h2>
        <p className="mb-4 text-lg md:text-xl lg:text-2xl max-w-2xl">
          A Passionate Web Developer Crafting Seamless Digital Experiences – 
          Trust Me to Build Your Dream Website!
        </p>
        <div className="flex space-x-4">
        <ButtonElement text={"See More About Me"}/>
        <ButtonElement text={"Download My CV"}/>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
        <a href="https://facebook.com" className="text-white hover:text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" className="text-white hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com" className="text-white hover:text-blue-600">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
