import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface Props {
  title: string;
  contents: any;
}

const Contents: React.FC<Props> = ({ title, contents }) => {
  return (
    <>
      {contents.length > 0 && (
        <article className="grid grid-cols-[100px_1fr] gap-2 border-b py-2 ">
          <h4 className="min-w-[100px] font-bold py-1">{title}</h4>
          <ul>
            {contents?.map((item: string, i: number) => {
              return (
                <li key={i} className="py-1 flex  gap-3 ">
                  <span>:</span>
                  <span>{item}</span>
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
