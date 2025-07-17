import Image from "next/image";
import Link from "next/link";
import React from "react";
import bujujan from "../../public/assets/images/bujujan.png";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="w-full flex justify-center mt-4 z-10 fixed">
      <div className="bg-white/30 backdrop-blur-md w-[30%] h-10 flex justify-between items-center p-1 border rounded-3xl">
        <div className="flex items-center gap-2">
          <div className="bg-[#333333] w-8 rounded-full">
            <Image
              src={bujujan}
              alt="logo"
              width={40}
              height={40}
              className=""
            />
          </div>
          <h1 className="font-semibold">Bujujan</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="https://github.com/bujujan">Projects</Link>
        </div>
        <Link href="mailto:Bujujan.ru@gmail.com">
          <Button variant="default" size="md" className="text-xs">
            Let&apos;s Connect
          </Button>
        </Link>
      </div>
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default Header;
