import MobileCardContainer from "@/components/common/MobileCardContainer";
import PhoneCategory from "@/components/common/PhoneCategory";
import SubHeader from "@/components/container/header/SubHeader";
import PriceRange from "@/components/common/PriceRange";

import React from "react";
import Pagination from "@/components/common/Pagination";

const getData = async (slug: string, pageNumber?: string) => {
  let url: string;
  url = pageNumber
    ? (`${process.env.API_URL}/mobiles/price/${slug}?page=${pageNumber}` as string)
    : (`${process.env.API_URL}/mobiles/price/${slug}` as string);

  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
};

const PriceRanges = async ({
  searchParams,
  params,
}: {
  searchParams: { page: string };
  params: { slug: string };
}) => {
  const {
    data: { parPage, count, mobiles },
  } = await getData(params.slug, searchParams.page);
  return (
    <section className="main">
      <section className="layout container">
        <div>
          <div className="my-2 mt-4">
            <h1 className="text-2xl">Latest Mobiles Price in Bangladesh</h1>
          </div>
          <MobileCardContainer data={mobiles} />
        </div>
        {mobiles.length >= 12 && (
          <Pagination
            currenPage={parseInt(searchParams.page ? searchParams.page : "1")}
            totalProduct={count}
            parPage={parPage}
            path={`price-range/${params.slug}`}
          />
        )}
      </section>
    </section>
  );
};

export default PriceRanges;
