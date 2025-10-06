import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-full flex justify-center items-center"
    >
      <div className="w-[60%] flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>About me</p>
          <h1 className="text-4xl font-bold">It&apos;s me Bujujan</h1>
        </div>
        <div className="w-[70%] text-center text-lg">
          I&apos;m Bujujan, a software engineer with a strong focus on
          full-stack development. With experience across web and mobile
          technologies, I&apos;m passionate about building thoughtful and
          intuitive digital experiences. My goal is to connect people and
          technology by transforming complex ideas into clean, functional, and
          impactful solutions. I&apos;m currently based in Morocco, always
          learning and exploring new ways to craft better software.
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm text-gray-500 text-center">
            Want to know more about me?
          </div>
          <div className="flex gap-4">
            <Link href="mailto:Bujujan.ru@gmail.com">
              <Button variant="default" size="md" className="text-xs">
                Let&apos;s Connect
              </Button>
            </Link>
            <Link href="/assets/ResumeENG.pdf" target="_blank">
              <Button variant="outline" size="md" className="text-xs">
                Download CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
