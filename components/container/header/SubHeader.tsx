"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const SubHeader = () => {
  const { brand } = useParams();
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
    <div>
      <ul
        className="flex md:justify-around whitespace-nowrap text-sm md:text-base divide-x rounded bg-primary-bg-light  overflow-x-scroll scrollbar-hide "
        role="navigation"
      >
        {brands.map((item: string, index: number) => {
          return (
            <li
              key={index}
              className={`list-none  px-2 py-1 ${
                brand === item.toLowerCase()
                  ? "bg-primary-text-light text-secondary-bg-light"
                  : ""
              }`}
            >
              <Link
                href={`mobile/${item.toLowerCase()}`}
                className="text-center"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubHeader;
