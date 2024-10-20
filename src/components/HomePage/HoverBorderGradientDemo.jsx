"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    (<div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black text-3xl dark:text-white flex items-center space-x-2">
        <span>Join Us</span>
      </HoverBorderGradient>
    </div>)
  );
}


