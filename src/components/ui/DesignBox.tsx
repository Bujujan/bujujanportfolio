import React from "react";
import { cn } from "@/lib/utils"; // Optional utility to merge Tailwind class names

interface DesignBoxProps {
  subtitle: string;
  title: string;
  image: React.ReactNode; // Can be <img />, an icon, or any JSX
  //   footer: React.ReactNode;
  className?: string;
}

const DesignBox: React.FC<DesignBoxProps> = ({
  subtitle,
  title,
  image,
  //   footer,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-4 border h-full border-gray-400 rounded-lg",
        className
      )}
    >
      <div className="mb-2 flex flex-col gap-2">
        <div className="text-sm">{subtitle}</div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="flex justify-end items-end h-full">{image}</div>
      {/* <div>{footer}</div> */}
    </div>
  );
};

export default DesignBox;
