"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Reactive Portfolio Website made using Next.js, CSS, HTML, Tailwind CSS, JavaScript and Framer Motion. Code Source available on Github",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Yoga Pose Detection",
    description: "Used TensorFlow and OpenPose library to build a model that corrects your Yoga Postures by capturing your live Posture and creating Web Interface using Flask, HTML, CSS and JavaScript",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/Yoga-Pose-Detection",
     previewUrl: "https://github.com/blackcross7/Yoga-Pose-Detection",
  },
  {
    id: 3,
    title: "Emotion driven music recommendation system",
    description: "Emotion recognition enhances music recommendation systems, personalizing playlist generation",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text:white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Mobile" 
          isSelected={tag === "Mobile"} 
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
