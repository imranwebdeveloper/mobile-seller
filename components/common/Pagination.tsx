"use client";
import Link from "next/link";
import React from "react";

interface Props {
  currenPage: number;
  totalProduct: number;
  parPage: number;
  path: string;
}

const Pagination: React.FC<Props> = ({
  currenPage,
  totalProduct,
  parPage,
  path,
}: Props) => {
  const totalPage = Math.ceil(totalProduct / parPage);
  const numOfPages = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <nav className="flex justify-center my-4">
      <ul className="gap-3 flex bg-primary-bg-light px-4  py-3 items-center  rounded-md">
        <li>
          <Link
            href={`${
              currenPage <= 1
                ? `${path}?page=${1}`
                : `${path}?page=${currenPage - 1}`
            }`}
            className="text-link-text-light font-bold px-2"
          >
            Previous
          </Link>
        </li>
        {numOfPages.map((item) => {
          return (
            <li key={item}>
              <Link
                className={` ${
                  currenPage === item &&
                  "bg-slate-200 font-bold text-link-text-light"
                }  rounded px-3 py-1 `}
                href={`${path}?page=${item}`}
              >
                {item}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={`${path}?page=${currenPage + 1}`}
            className="text-link-text-light font-bold px-2"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
