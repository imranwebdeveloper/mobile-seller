"use client";

import {
  useDeleteMobileMutation,
  useGetAllMobileListQuery,
} from "@/redux/api/adminApiSlice";
import Link from "next/link";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Image from "next/image";

const AllMobilesList = () => {
  const { data } = useGetAllMobileListQuery(null);
  const [deleteMobile] = useDeleteMobileMutation();

  const deleteMobileHandler = async (id: string) => {
    await deleteMobile(id);
    toast.success("Mobile deleted successfully");
  };

  return (
    <>
      {data && (
        <section className=" mx-auto max-w-4xl rounded-md border border-gray-200 bg-white ">
          {/* <header className=" px-5 py-4">
            <h3 className="text-base font-semibold">All Mobile List</h3>
          </header> */}

          <div className="overflow-x-auto p-3">
            <table className="w-full table-auto">
              <thead className="border-b  border-gray-200  text-left text-sm  font-semibold uppercase">
                <tr>
                  <th className="p-2">
                    <p>Product Name</p>
                  </th>
                  {/* <th className="p-2">
                    <p>Price</p>
                  </th> */}
                  {/* <th className="p-2">
                    <p>Total</p>
                  </th> */}
                  <th className="p-2 text-center">
                    <p>Action</p>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50 ">
                {data.map((item: any) => {
                  return (
                    <tr key={item._id} className="border-b border-gray-100">
                      <td className=" p-2">
                        <div className="flex items-center gap-3  ">
                          <Image
                            src={item.imgUrl}
                            alt={item.model}
                            className="h-16 w-12"
                            width={100}
                            height={100}
                            priority
                          />
                          <div>
                            <p className="font-bold">{item.brandName}</p>
                            <p>{item.model}</p>
                          </div>
                        </div>
                      </td>
                      {/* <td className="p-2">
                        <div className="text-left">1</div>
                      </td>
                      <td className="p-2">
                        <div className="text-left  text-green-500">
                          RM 2,890.66
                        </div>
                      </td> */}
                      <td className="p-2">
                        <div className="flex justify-center  text-xl">
                          <Link
                            href={`admin/mobiles/update/${item._id}`}
                            className="rounded-full p-2 hover:bg-green-100"
                          >
                            <FiEdit />
                          </Link>
                          <button
                            className="rounded-full p-2 hover:bg-red-100"
                            onClick={() => deleteMobileHandler(item._id)}
                          >
                            <BsTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
};

export default AllMobilesList;
