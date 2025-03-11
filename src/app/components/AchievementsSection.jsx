"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    id: 1,
    value: "100",
    postfix: "+",
    icon: "/github-icon.svg", // Add the icon path here
    link: "https://github.com",
  },
  {
    id: 2,
    value: "100,000",
    icon: "/linkedin-icon.svg", // Add the LinkedIn icon path here
    link: "https://linkedin.com",
  },
  
  {
    id: 7,
    value: "20,000",
    icon: "/instagram.png", // Add the Instagram icon path here
    link: "https://www.instagram.com/akarshtyagi__/",
  }

];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement) => (
          <div
            key={achievement.id}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            {achievement.icon ? (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={achievement.icon}
                  alt={`${achievement.metric} icon`}
                  width={60} // Increased size
                  height={60} // Increased size
                  className="transition-transform duration-300 ease-in-out transform hover:scale-125" // Zoom effect on hover
                />
              </a>
            ) : (
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix || ""}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix || ""}
              </h2>
            )}
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;