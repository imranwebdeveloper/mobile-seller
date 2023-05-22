import MobileCardContainer from "@/components/common/MobileCardContainer";
import React from "react";
import Pagination from "@/components/common/Pagination";
import { headers } from "@/lib/fetchHeader";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const getData = async (slug: string, pageNumber?: string) => {
  let url: string;
  url = pageNumber
    ? (`${process.env.API_URL}/mobiles/price/${slug}?page=${pageNumber}` as string)
    : (`${process.env.API_URL}/mobiles/price/${slug}` as string);
  const res = await fetch(url, { headers, cache: "no-cache" });
  if (!res.ok) throw new Error(await res.json().then((data) => data.message));
  return res.json();
};

// SEO Meta tag
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const prices = params.slug.split("-");
  const metadata = {
    title: `Mobile Phone Prices in Bangladesh: ${params.slug} Tk | ${process.env.LOGO}`,
    description: `Discover a wide range of mobile phones priced between ${
      prices[0]
    } ${prices[1] ? `and ${prices[1]}` : ""} Tk in Bangladesh at ${
      process.env.LOGO
    }. Browse through our collection of high-quality smartphones from top brands, compare prices, and make an informed purchase decision.`,
    alternates: {
      canonical: `${process.env.FULL_DOMAIN_URL}/price-range/${params.slug}`,
    },
    openGraph: {
      type: "website",
      title: `Mobile Phone Prices in Bangladesh: ${params.slug} Tk | ${process.env.LOGO}`,
      description: `Discover a wide range of mobile phones priced between ${
        prices[0]
      } ${prices[1] ? `and ${prices[1]}` : ""} Tk in Bangladesh at ${
        process.env.LOGO
      }. Browse through our collection of high-quality smartphones from top brands, compare prices, and make an informed purchase decision.`,
      url: `${process.env.FULL_DOMAIN_URL}/price-range/${params.slug}`,
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/mobile-seller-e6165.appspot.com/o/logo.png?alt=media&token=e20206ed-013e-4fe7-a6e4-567de9d2838d",
          alt: "MobileSellerBD.com",
          width: 600,
          height: 315,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Mobile Phone Prices in Bangladesh: ${params.slug} Tk | ${process.env.LOGO}`,

      description: `Discover a wide range of mobile phones priced between ${
        prices[0]
      } ${prices[1] ? `and ${prices[1]}` : ""} Tk in Bangladesh at ${
        process.env.LOGO
      }. Browse through our collection of high-quality smartphones from top brands, compare prices, and make an informed purchase decision.`,
      images:
        "https://firebasestorage.googleapis.com/v0/b/mobile-seller-e6165.appspot.com/o/logo.png?alt=media&token=e20206ed-013e-4fe7-a6e4-567de9d2838d",
    },
  };

  return metadata;
}

const PriceRanges = async ({
  searchParams,
  params,
}: {
  searchParams: { page: string };
  params: { slug: string };
}) => {
  const { data } = await getData(params.slug, searchParams.page);

  if (!data) {
    notFound();
  }
  const { parPage, count, mobiles } = data;

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
