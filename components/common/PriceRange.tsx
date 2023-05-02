"use client";
import Link from "next/link";
import React from "react";

const PriceRange = () => {
  return (
    <div className="md:flex items-center md:gap-2 gap-1 mt-2">
      <p className="font-bold">Price Range :</p>
      <ul className="flex justify-start whitespace-nowrap gap-1  text-sm md:text-base divide-x rounded  overflow-x-scroll scrollbar-hide ">
        <li className="px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light ">
          <Link href="/price-range/1-5000">Tk 1 - 5000</Link>
        </li>
        <li className="px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light ">
          <Link href="/price-range/5001-10000">Tk 5001 - 10000</Link>
        </li>
        <li className="px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light ">
          <Link href="/price-range/10001-20000">Tk 10001 - 20000</Link>
        </li>
        <li className="px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light ">
          <Link href="/price-range/20001-30000">Tk 20001 - 30000</Link>
        </li>
        <li className="px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light ">
          <Link href="/price-range/30001-50000">Tk 30001 - 50000</Link>
        </li>
        <li className="px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light ">
          <Link href="/price-range/50001">Tk 50001+</Link>
        </li>
      </ul>
    </div>
  );
};

export default PriceRange;
