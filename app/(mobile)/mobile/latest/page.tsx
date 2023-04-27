import PhoneCategory from "@/components/common/PhoneCategory";
import PriceRange from "@/components/common/PriceRange";
import SubHeader from "@/components/container/header/SubHeader";
import React from "react";
import LoadingPage from "../../loading";
import NewMobilesContainer from "@/components/container/main/NewMobilesContainer";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

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
    data: { count, mobiles },
  } = await getData(searchParams.page);
  const nextPage = parseInt(searchParams.page) + 1;
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
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded  bg-primary-bg-light dark:bg-primary-bg-dark p-4 border dark:border-primary-bg-dark ">
            {mobiles.length === 0 && (
              <h3 className="font-bold text-center ">No data found</h3>
            )}
            {mobiles.map((item: any) => {
              return (
                <Link
                  key={item._id}
                  href={`mobile/${item.brandName.toLowerCase()}/${
                    item.model_id
                  }`}
                >
                  <article className="transition cursor-pointer hover:scale-105  flex flex-col gap-1 p-4">
                    <header>
                      <Image
                        src={item.imgUrl}
                        width={100}
                        height={120}
                        priority
                        alt={`${item.brandName} ${item.model} mobile`}
                        className="w-24 h-28 md:w-28 md:h-32 mx-auto lg:w-32 lg:h-36 "
                      />
                    </header>

                    <main className="text-sm text-center">
                      <h4 className="font-bold">{item.brandName}</h4>
                      <p>{item.model}</p>
                    </main>
                    <footer>
                      <p className="text-sm text-center font-bold text-link-text-light">
                        {item.variant[0].unofficial
                          ? `${item.variant[0]?.unofficial} Tk.`
                          : "N/A"}
                      </p>
                    </footer>
                  </article>
                </Link>
              );
            })}
          </section>
          {mobiles.length >= 12 && (
            <div className="flex justify-center mt-2">
              <Link
                href={{ pathname: "mobile/latest", query: { page: nextPage } }}
                className="btn-primary"
              >
                More Mobiles
              </Link>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default LatestMobiles;
