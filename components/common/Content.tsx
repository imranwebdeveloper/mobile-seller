import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface Props {
  title: string;
  content?: string;
}

const Content: React.FC<Props> = ({ content, title }) => {
  const yes = content?.trim().toLowerCase() === "yes";
  const no = content?.trim().toLowerCase() === "no";
  return (
    <>
      {content && (
        <article className="grid grid-cols-[100px_1fr] gap-2 border-b py-2 ">
          <h4 className="min-w-[100px] font-bold py-1">{title}</h4>
          <ul>
            {content && (
              <li className="py-1 flex gap-3 ">
                <span>:</span>
                <span>
                  {yes && (
                    <BsCheckCircleFill className="text-xl bg-primary-bg-light text-[#8AC63C] " />
                  )}
                  {no && (
                    <BsXCircleFill className="text-xl b text-[#CA321C] bg-primary-bg-light " />
                  )}
                  {!yes && !no && content}
                </span>
              </li>
            )}
          </ul>
        </article>
      )}
    </>
  );
};

export default Content;
