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
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Projects", ariaLabel: "View my projects", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  const itemss = [
    {
      label: "About",

      bgColor: "#0D0716",

      textColor: "#fff",

      links: [
        { label: "Company", ariaLabel: "About Company", href: "#" },

        { label: "Careers", ariaLabel: "About Careers", href: "#" },
      ],
    },

    {
      label: "Projects",

      bgColor: "#170D27",

      textColor: "#fff",

      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#" },

        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#" },
      ],
    },

    {
      label: "Contact",

      bgColor: "#271E37",

      textColor: "#fff",

      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },

        { label: "Twitter", ariaLabel: "Twitter", href: "#" },

        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" },
      ],
    },
  ];
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
      {/* <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#ff6b6b", "#ff6b6b"]}
        logoUrl="/assets/images/bujujan.png"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={true}
      /> */}
      {/* <CardNav
        logo="Bujujan"
        logoAlt="Bujujan"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      /> */}
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>Bujujan</span>}
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
