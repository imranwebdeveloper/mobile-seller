import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface Props {
  title: string;
  contents: any;
  none?: boolean;
}

const Contents: React.FC<Props> = ({ title, contents, none }) => {
  return (
    <>
      {contents.length > 0 && (
        <article
          className={`md:flex  border-t border-r border-l  ${
            none && "border-b"
          }`}
        >
          <p className="min-w-[125px] font-bold   text-primary-bg-dark bg-slate-50 p-1 md:p-2 md:border-r">
            {title}
          </p>
          <ul className="flex-1 p-1 md:p-2">
            {contents?.map((item: string, i: number) => {
              return (
                <li key={i} className="flex  gap-3  ">
                  {item}
                </li>
              );
            })}
          </ul>
        </article>
      )}
    </>
  );
};

export default Contents;
