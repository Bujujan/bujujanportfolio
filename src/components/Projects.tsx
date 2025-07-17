import React from "react";
import Box from "./ui/Box";
import Link from "next/link";
import Image from "next/image";
import DesignBox from "./ui/DesignBox";
import GotIdea from "../../public/assets/images/undraw_got-an-idea_1z3i.png";
import Webarify from "../../public/assets/images/Webarifyweb.png";
import Cgm from "../../public/assets/images/cgmweb.png";
import globe from "../../public/assets/images/globe.png";
import nextjs from "../../public/assets/images/nextjs.png";
import react from "../../public/assets/images/react.png";
import java from "../../public/assets/images/java.png";
import node from "../../public/assets/images/node.png";
import typescript from "../../public/assets/images/typescript.png";
import github from "../../public/assets/images/github.png";
import figma from "../../public/assets/images/figma.png";
import angular from "../../public/assets/images/angular.png";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-24">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>Projects</p>
          <h1 className="text-4xl font-bold">Web Development</h1>
          <p className="w-[60%] text-center mt-6 text-lg">
            A selection of applications and digital experiences I've built,
            showcasing my skills in design, development, and problem-solving
            across web and mobile platforms.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            {/* DesignBox */}
            <div className="flex-1">
              <DesignBox
                subtitle="From Concept to Code"
                title="Projects that bring visions to life through thoughtful design and clean development."
                image={
                  <Image
                    src={GotIdea}
                    alt="Idea"
                    width={280}
                    height={120}
                    className=""
                  />
                }
                className="bg-[#6FD383] rounded-lg p-4"
              />
            </div>

            {/* Webarify Box */}
            <div className="flex-1">
              <Box
                year="2025"
                title="Webarify"
                image={
                  <Image
                    src={Webarify}
                    alt="Webarify Logo"
                    width={230}
                    height={150}
                    className="rounded-md w-full object-cover"
                  />
                }
                footer={
                  <div className="flex justify-between items-center hover:translate-y-0.5 transition duration-300 hover:cursor-pointer">
                    <Link href="https://webarify.com" target="_blank">
                      Visit Website
                    </Link>
                    <ArrowUpRight className="w-4" />
                  </div>
                }
              />
            </div>

            {/* CGM Box */}
            <div className="flex-1">
              <Box
                year="2024"
                title="CGM"
                image={
                  <Image
                    src={Cgm}
                    alt="CGM Logo"
                    width={230}
                    height={150}
                    className="rounded-md w-full object-cover"
                  />
                }
                footer={
                  <div className="flex justify-between items-center hover:translate-y-0.5 transition duration-300 hover:cursor-pointer">
                    <Link href="https://www.cgm-sarl.com/ma" target="_blank">
                      Visit Website
                    </Link>
                    <ArrowUpRight className="w-4" />
                  </div>
                }
              />
            </div>
          </div>
          <div className="flex w-full h-full gap-4">
            <div className="w-[65%] h-full flex justify-center items-center rounded-md">
              <div className="grid grid-cols-4 border h-full w-full border-gray-800 rounded-md overflow-hidden">
                {[
                  nextjs,
                  react,
                  node,
                  typescript,
                  java,
                  angular,
                  github,
                  figma,
                ].map((tech, idx) => {
                  const isLastColumn = (idx + 1) % 4 === 0;
                  const isLastRow = idx >= 4; // 2 rows total, so index 4 and above are last row
                  return (
                    <div
                      key={idx}
                      className={`flex h-48 items-center justify-center
            ${!isLastColumn ? "border-r border-gray-800" : ""} 
            ${!isLastRow ? "border-b border-gray-800" : ""}`}
                    >
                      <Image
                        src={tech}
                        alt="tech-logo"
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1">
              <DesignBox
                subtitle="Solutions in Motion"
                title="Dynamic projects solving real-world needs—pixel by pixel, feature by feature."
                image={
                  <Image
                    src={globe}
                    alt="CGM Logo"
                    width={230}
                    height={150}
                    className="rounded-md flex justify-end items-end  object-cover"
                  />
                }
                className="bg-[#9C66F9] rounded-lg p-4 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
