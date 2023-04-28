import PhoneCategory from "@/components/common/PhoneCategory";
import PriceRange from "@/components/common/PriceRange";
import SubHeader from "@/components/container/header/SubHeader";
import React from "react";
import LoadingPage from "../../loading";
import NewMobilesContainer from "@/components/container/main/NewMobilesContainer";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import Pagination from "@/components/common/Pagination";
import MobileCardContainer from "@/components/common/MobileCardContainer";

const getData = async (pageNumber: string) => {
  const res = await fetch(
    `${process.env.API_URL}/mobiles/latest?page=${pageNumber}` as string,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

const LatestMobiles = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const {
    data: { count, mobiles, parPage },
  } = await getData(searchParams.page);

  return (
    <section className="main">
      <section className="layout container">
        <SubHeader />
        <PriceRange />
        <PhoneCategory />
        <div>
          <div className="my-2 mt-4">
            <h1 className="text-2xl">
              Latest Mobile Phones Price in Bangladesh
            </h1>
          </div>
          <MobileCardContainer data={mobiles} />
        </div>
        {mobiles.length > 0 && (
          <Pagination
            currenPage={parseInt(searchParams.page)}
            totalProduct={count}
            parPage={parPage}
            path="mobile/latest"
          />
        )}
      </section>
    </section>
  );
};

export default LatestMobiles;
