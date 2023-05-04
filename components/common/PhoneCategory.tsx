"use client";
import Link from "next/link";
import React from "react";

const PhoneCategory = () => {
  return (
    <div className="md:flex items-center md:gap-2 gap-1 mt-2 ">
      <p className="font-bold hidden md:flex">Category :</p>
      <ul className="flex gap-1 items-center  text-sm md:text-base">
        <li className=" px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light">
          <Link href="/category/tablets">Tablets</Link>
        </li>
        <li className=" px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light">
          <Link href="/category/smartphones">Smartphones</Link>
        </li>
        <li className=" px-2 md:px-4 py-1 border rounded-full bg-primary-bg-light">
          <Link href="/category/feature-phones">Feature Phones</Link>
        </li>
      </ul>
    </div>
  );
};

export default PhoneCategory;
