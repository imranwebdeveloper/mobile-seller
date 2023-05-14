import React from "react";
import Pagination from "@/components/common/Pagination";
import MobileCardContainer from "@/components/common/MobileCardContainer";

const getData = async (pageNumber: string) => {
  const res = await fetch(
    `${process.env.API_URL}/mobiles/latest?page=${pageNumber}` as string
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
  const currenPage = parseInt(searchParams.page);

  return (
    <section className="main">
      <section className="layout container">
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
            currenPage={currenPage ? currenPage : 1}
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
