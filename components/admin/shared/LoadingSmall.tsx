"use client";
import React from "react";

const LoadingSmall = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default LoadingSmall;
