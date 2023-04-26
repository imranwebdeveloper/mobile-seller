"use client";
import Link from "next/link";
import React from "react";

const SubHeader = () => {
  const brands = [
    "Apple",
    "Samsung",
    "Google",
    "OnePlus",
    "Huawei",
    "Sony",
    "LG",
    "Motorola",
    "Nokia",
    "Realme",
    "Oppo",
    "Vivo",
    "Xioami",
    "Asus",
  ];

  return (
    <ul
      className="flex justify-around whitespace-nowrap text-sm md:text-base divide-x rounded bg-primary-bg-light  overflow-x-scroll scrollbar-hide "
      role="navigation"
    >
      {brands.map((item: string, index: number) => {
        return (
          <li key={index} className="list-none  px-2 py-1 ">
            <Link href={`mobile/${item.toLowerCase()}`} className="text-center">
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubHeader;
