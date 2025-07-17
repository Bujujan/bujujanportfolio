import React from "react";
import { cn } from "@/lib/utils"; // Optional utility to merge Tailwind class names

interface BoxProps {
  year: string;
  title: string;
  image: React.ReactNode; // Can be <img />, an icon, or any JSX
  footer: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ year, title, image, footer, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full justify-between p-4 border rounded-lg",
        className
      )}
    >
      <div className="mb-2">
        <div className="text-sm text-gray-500">{year}</div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <div className="mb-2">{image}</div>
      <div className="text-xs">{footer}</div>
    </div>
  );
};

export default Box;
