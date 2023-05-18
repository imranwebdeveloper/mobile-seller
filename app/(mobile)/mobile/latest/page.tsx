import React from "react";
import Pagination from "@/components/common/Pagination";
import MobileCardContainer from "@/components/common/MobileCardContainer";
import { headers } from "@/lib/fetchHeader";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const getData = async (pageNumber: string) => {
  const res = await fetch(
    `${process.env.API_URL}/mobiles/latest?page=${pageNumber}` as string,
    {
      headers: headers,
    }
  );
  if (!res.ok) throw new Error(await res.json().then((data) => data.message));
  return res.json();
};
export async function generateMetadata(): Promise<Metadata> {
  const metadata = {
    title: `Latest Mobile Phones Price in Bangladesh | ${process.env.LOGO}`,
    description: `Discover the latest mobile phones price in Bangladesh at ${process.env.LOGO}. Stay updated with the newest smartphone releases, features, specifications, and prices. Find the perfect mobile device to suit your needs.`,
    alternates: {
      canonical: `${process.env.FULL_DOMAIN_URL}/mobile/latest`,
    },
    openGraph: {
      type: "website",
      title: `Latest Mobile Phones Price in Bangladesh | ${process.env.LOGO}`,
      description: `Discover the latest mobile phones price in Bangladesh at ${process.env.LOGO}. Stay updated with the newest smartphone releases, features, specifications, and prices. Find the perfect mobile device to suit your needs.`,
      url: `${process.env.FULL_DOMAIN_URL}/mobile/latest`,
      images: [
        {
          url: `${process.env.FULL_DOMAIN_URL}/logo.png`,
          alt: "MobileSellerBD.com",
          width: 600,
          height: 315,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Latest Mobile Phones Price in Bangladesh | ${process.env.LOGO}`,
      description: `Discover the latest mobile phones price in Bangladesh at ${process.env.LOGO}. Stay updated with the newest smartphone releases, features, specifications, and prices. Find the perfect mobile device to suit your needs.`,
      images: `${process.env.FULL_DOMAIN_URL}/logo.png`,
    },
  };

  return metadata;
}
const LatestMobiles = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const { data } = await getData(searchParams.page);
  if (!data) {
    notFound();
  }

  const { count, mobiles, parPage } = data;
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
