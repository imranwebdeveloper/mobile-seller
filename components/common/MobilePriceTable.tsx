import { Variant } from "@/types/Variant";
import React from "react";

interface Props {
  variants: Variant[];
  date: string;
}

const MobilePriceTable: React.FC<Props> = ({ variants, date }) => {
  return (
    <div className="overflow-hidden">
      <table className="min-w-full border text-center  border-collapse ">
        <thead className="bg-slate-50  text-primary-bg-dark">
          <tr>
            <th className="py-2 border">Variants</th>
            <th className="py-2 border">Official</th>
            <th className="py-2 border">Unofficial</th>
            <th className="py-2 border-b  hidden md:block">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((item, i) => {
            return (
              <tr key={i}>
                <td className="whitespace-nowrap border py-2 ">
                  {item.ram}GB/{item.rom > 1000 ? "1TB" : `${item.rom}GB`}
                </td>
                <td className="whitespace-nowrap border py-2 ">
                  {item.official === 0 ? "-" : `${item.official} Tk`}
                </td>
                <td className="whitespace-nowrap border py-2 ">
                  {item.unofficial === 0 ? "-" : `${item.unofficial} Tk`}
                </td>

                {i === variants.length - 1 && (
                  <td className="whitespace-nowrap  py-2 hidden md:table-cell">
                    {date}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MobilePriceTable;
