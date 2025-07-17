import Image from "next/image";
import React from "react";
import bujujan from "../../public/assets/images/bujujan.png";
import laptop from "../../public/assets/images/laptop.png";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="text-7xl font-black">Hi, I&apos;m Bujujan</div>
          <div className=" border border-[#171717] rounded-full w-22 h-22 flex items-center justify-center">
            <div className="bg-[#171717] w-20 h-20 rounded-full flex items-center justify-center">
              <Image
                src={bujujan}
                alt="logo"
                width={100}
                height={100}
                className=""
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-7xl font-black">A Software Engineer</div>
          <Image
            src={laptop}
            alt="logo"
            width={100}
            height={100}
            className=""
          />
          <div className="text-7xl font-black">Student</div>
        </div>

        <div className="flex items-center gap-56">
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <p className="">Rabat, Morocco</p>
          </div>
          <div className="flex items-center justify-center bg-green-300 rounded-full p-1 px-3 gap-2">
            <div className="bg-green-500 w-2 h-2 rounded-full"></div>
            <p className="text-green-700">Available for work</p>
          </div>
        </div>
      </div>
    </div>
  );
}
