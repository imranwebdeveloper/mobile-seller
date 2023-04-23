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
      className="flex justify-around whitespace-nowrap divide-x rounded bg-primary-bg-light dark:bg-secondary-bg-dark  overflow-x-scroll scrollbar-hide "
      role="navigation"
    >
      {brands.map((item: string, index: number) => {
        return (
          <li
            key={index}
            className="list-none font-bold px-2 py-1 text-link-text-light dark:text-link-text-dark  "
          >
            <Link href={`/${item.toLowerCase()}`} className="text-center">
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubHeader;
