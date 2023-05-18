import MobileCardContainer from "@/components/common/MobileCardContainer";
import Pagination from "@/components/common/Pagination";
import { headers } from "@/lib/fetchHeader";
import { toTitleCase } from "@/utils/toTitleCase";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const getData = async (slug: string, pageNumber?: string) => {
  let url: string;
  url = pageNumber
    ? (`${process.env.API_URL}/mobiles/brand/${slug}?page=${pageNumber}` as string)
    : (`${process.env.API_URL}/mobiles/brand/${slug}` as string);
  const res = await fetch(url, { headers: headers });
  if (!res.ok) throw new Error(await res.json().then((data) => data.message));
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { brand: string };
}): Promise<Metadata> {
  const brandTitle = toTitleCase(params.brand);

  const metadata = {
    title: `${brandTitle} Mobile Price in Bangladesh | ${process.env.LOGO}`,
    description: `Discover the latest ${brandTitle} mobile phones in Bangladesh at ${process.env.LOGO}. Stay updated with the newest releases, features, specifications, and prices of ${brandTitle} smartphones. Find the perfect ${brandTitle} mobile device to suit your needs.`,
    alternates: {
      canonical: `${process.env.FULL_DOMAIN_URL}/mobiles/brand/${params.brand}`,
    },
    openGraph: {
      type: "website",
      title: `${brandTitle} Mobile Price in Bangladesh | ${process.env.LOGO}`,
      description: `Discover the latest ${brandTitle} mobile phones in Bangladesh at ${process.env.LOGO}. Stay updated with the newest releases, features, specifications, and prices of ${brandTitle} smartphones. Find the perfect ${brandTitle} mobile device to suit your needs.`,
      url: `${process.env.FULL_DOMAIN_URL}/mobiles/brand/${params.brand}`,
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
      title: `${brandTitle} Mobile Price in Bangladesh | ${process.env.LOGO}`,
      description: `Discover the latest ${brandTitle} mobile phones in Bangladesh at ${process.env.LOGO}. Stay updated with the newest releases, features, specifications, and prices of ${brandTitle} smartphones. Find the perfect ${brandTitle} mobile device to suit your needs.`,
      images: `${process.env.FULL_DOMAIN_URL}/logo.png`,
    },
  };

  return metadata;
}

const BrandModelList = async ({
  params,
  searchParams,
}: {
  params: { brand: string };
  searchParams: { page: string };
}) => {
  const { data } = await getData(params.brand, searchParams.page);

  if (!data) {
    notFound();
  }
  const { parPage, count, mobiles } = data;
  const currenPage = parseInt(searchParams.page);
  const brandTitle = toTitleCase(params.brand);

  return (
    <div className="main">
      <section className="layout container">
        <div className="mb-2 mt-4">
          <h1>{`${brandTitle} Mobiles`}</h1>
        </div>
        <MobileCardContainer data={mobiles} />
        {mobiles.length >= parPage && (
          <Pagination
            path={`mobile/${params.brand}`}
            parPage={parPage}
            totalProduct={count}
            currenPage={currenPage ? currenPage : 1}
          />
        )}
      </section>
    </div>
  );
};

export default BrandModelList;
