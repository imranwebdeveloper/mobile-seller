import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface Props {
  title: string;
  content?: string;
  none?: boolean;
}

const Content: React.FC<Props> = ({ content, title, none }) => {
  const yes = content?.trim().toLowerCase() === "yes";
  const no = content?.trim().toLowerCase() === "no";
  return (
    <>
      {content && (
        <article
          className={`md:flex  border-t border-r  border-l ${
            none && "border-b"
          }`}
        >
          <h4 className="min-w-[125px] font-bold  text-sm md:text-base bg-slate-50 p-1   md:border-r ">
            {title}
          </h4>
          <ul className="flex-1 p-1  ">
            {content && (
              <li className="flex gap-3 ">
                <p>
                  {yes && (
                    <BsCheckCircleFill className="text-xl bg-primary-bg-light text-[#8AC63C] " />
                  )}
                  {no && (
                    <BsXCircleFill className="text-xl b text-[#CA321C] bg-primary-bg-light " />
                  )}
                  {!yes && !no && content}
                </p>
              </li>
            )}
          </ul>
        </article>
      )}
    </>
  );
};

export default Content;
