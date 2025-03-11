"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-white border border-gray-500">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left border-r">Skill</th>
                            <th className="px-4 py-2 text-left">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Node.js</td>
                            <td className="px-4 py-2">Intermediate</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Express</td>
                            <td className="px-4 py-2">Beginner</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">JAVA</td>
                            <td className="px-4 py-2">Intermediate</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Next.js</td>
                            <td className="px-4 py-2">Beginner</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">JavaScript</td>
                            <td className="px-4 py-2">Intermediate</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">React</td>
                            <td className="px-4 py-2">Intermediate</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">HTML</td>
                            <td className="px-4 py-2">Intermediate</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">CSS</td>
                            <td className="px-4 py-2">Intermediate</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-white border border-gray-500">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left border-r">Degree</th>
                            <th className="px-4 py-2 text-left border-r">Institution</th>
                            <th className="px-4 py-2 text-left">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Bachelors of Engineering (Computer Science)</td>
                            <td className="px-4 py-2 border-r">Chandigarh University</td>
                            <td className="px-4 py-2">2021-2025</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Intermediate Education</td>
                            <td className="px-4 py-2 border-r">Dayawati Modi Academy School</td>
                            <td className="px-4 py-2">2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-white border border-gray-500">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-2 text-left border-r">Certification</th>
                            <th className="px-4 py-2 text-left">Issued By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Responsive Web Design in Adobe XD</td>
                            <td className="px-4 py-2">Google</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Elite Certificate in Internet of Things</td>
                            <td className="px-4 py-2">NPTEL</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">JAVA as a Second Language</td>
                            <td className="px-4 py-2">Coursera</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Project Management Job Simulation</td>
                            <td className="px-4 py-2">Accenture</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-2 border-r">Introduction to Web Development</td>
                            <td className="px-4 py-2">IBM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src="/images/about-image.png" 
                    alt="about image" 
                    width={300} 
                    height={300} 
                    className="rounded-full"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Hi, I'm Akarsh Tyagi, a passionate Web Developer with a strong foundation in Next.js, React, JavaScript, HTML, CSS, tailwindCSS, and modern web technologies. I specialize in building responsive, dynamic, and user-friendly web applications. I love transforming ideas into interactive digital experiences, focusing on performance, accessibility, and seamless user experience. Always eager to learn and explore new technologies, I strive to create efficient and scalable solutions.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            {" "} Skills{" "} 
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            {" "} Education{" "} 
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}
                        >
                            {" "} Certifications{" "} 
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
