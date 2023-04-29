import MobileCardContainer from "@/components/common/MobileCardContainer";
import Pagination from "@/components/common/Pagination";
import PhoneCategory from "@/components/common/PhoneCategory";
import PriceRange from "@/components/common/PriceRange";
import SubHeader from "@/components/container/header/SubHeader";
import React from "react";

const getData = async (slug: string, pageNumber?: string) => {
  let url: string;
  url = pageNumber
    ? (`${process.env.API_URL}/mobiles/category/${slug}?page=${pageNumber}` as string)
    : (`${process.env.API_URL}/mobiles/category/${slug}` as string);

  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
};

const CategoryPhones = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: string };
}) => {
  const {
    data: { parPage, count, mobiles },
  } = await getData(params.slug, searchParams.page);
  const category = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  category.charAt(0).toUpperCase();
  return (
    <section className="main">
      <section className="layout container">
        <SubHeader />
        <PriceRange />
        <PhoneCategory />
        <div>
          <div className="my-2 mt-4">
            <h1 className="text-2xl">Latest {category} Price in Bangladesh</h1>
          </div>
          <MobileCardContainer data={mobiles} />
        </div>
        {mobiles.length >= 12 && (
          <Pagination
            currenPage={parseInt(searchParams.page)}
            totalProduct={count}
            parPage={parPage}
            path={`category/${params.slug}`}
          />
        )}
      </section>
    </section>
  );
};

export default CategoryPhones;
