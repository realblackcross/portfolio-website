"use client"; 
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12"> 
        <div className="col-span-7 place-self-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Akarsh Tyagi',
                1000, 
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> 
            I am a Computer Science Engineer graduated from Chandigarh University, passionate about software development and problem-solving. Aspiring to work in innovative and challenging environments, I continuously learn new technologies to stay ahead in the evolving tech landscape. With adaptability, creativity, and resourcefulness, I strive to contribute meaningfully to my organization’s success while growing into a well-rounded professional.
          </p>
          <div> 
            <button 
              onClick={handleScrollToContact} 
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bgslate200 text-white">
              Hire Me
            </button>
            <a href="/Akarsh_Tyagi_CV.pdf" download>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative"> 
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
