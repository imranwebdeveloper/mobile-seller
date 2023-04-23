"use client";

import { useSelector } from "react-redux";

import Image from "next/image";
import { RootState } from "@/redux/store";
import { useGetMobileByIdQuery } from "@/redux/api/adminApiSlice";
import PriceUpdateForm from "@/components/admin/form/mobile/PriceUpdateForm";
import ContentUpdateFrom from "@/components/admin/form/mobile/ContentUpdateFrom";
// import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const UpdatePrice = () => {
  const { id } = useParams();

  const { mobile } = useSelector((state: RootState) => state.mobileUpdate);
  const { isLoading, data } = useGetMobileByIdQuery(id);

  return (
    <>
      {mobile && (
        <section className="mx-auto grid max-w-4xl grid-cols-3 gap-4 ">
          <div className=" col-span-1 flex flex-col items-center rounded border bg-white p-8 text-center ">
            <Image
              src={mobile.imgUrl}
              alt=""
              className="h-36 w-32"
              width={180}
              height={220}
            />

            <div className="mt-2 ">
              <p className="text-xl font-bold">{mobile.brandName}</p>
              <p>{mobile.model}</p>
            </div>
          </div>

          <PriceUpdateForm />
          <ContentUpdateFrom />
        </section>
      )}
    </>
  );
};

export default UpdatePrice;
