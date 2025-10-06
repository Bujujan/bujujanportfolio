"use client";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import bujujan from "../../public/assets/images/bujujan.png";
// import Button from "./ui/Button";
// import ThemeToggle from "./ThemeToggle";
// import StaggeredMenu from "./StaggeredMenu";
// import CardNav from "./CardNav";
import BubbleMenu from "./BubbleMenu";

const Header = () => {
  const items = [
    {
      label: "home",
      href: "/",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "#about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "#projects",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
  ];
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <BubbleMenu
        logo=""
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        className=""
      />
    </div>
  );
};

export default Header;
