import { Mobile } from "@/types/mobile";

interface Image {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface Twitter {
  card: string;
  title: string;
  description: string;
  images: string[];
}

interface OpenGraph {
  title: string;
  description: string;
  type: "website";
  url: string;
  images: Image[];
  locale: string;
}

export class MobileMetaData {
  title: string;
  description: string;
  siteName: string;
  metadataBase: URL;
  openGraph: OpenGraph;
  twitter: Twitter;
  constructor(mobile: Mobile) {
    this.title = `${mobile.brandName} ${mobile.model} - Full Phone Specifications & Price | MobileDokan.com`;
    this.description = `Discover the latest ${mobile.brandName} ${mobile.model} smartphone price in Bangladesh with incredible features like ${mobile.networkBrands}, ${mobile.screenType}, {romOption}, {ramOption}, and more. Compare prices and buy now at MobileDokan.com for the best deals on the market.`;
    this.siteName = "MobileDhokan";

    (this.metadataBase = new URL(process.env.API_URL as string)),
      (this.openGraph = {
        title: `${mobile.brandName} ${mobile.model} - Full Phone Specifications & Price`,
        description: `Discover the latest ${mobile.brandName} ${mobile.model} smartphone with incredible features`,
        url: `${process.env.VERCEL_URL}`,
        type: "website",
        locale: "en_US",
        images: [
          {
            alt: `${mobile.brandName} ${mobile.model}`,
            width: 600,
            height: 315,
            url: mobile.imgUrl,
          },
        ],
      });
    this.twitter = {
      card: "summary_large_image",
      title: `${mobile.brandName} ${mobile.model} - Full Phone Specifications & Price`,
      description: `Discover the latest ${mobile.brandName} ${mobile.model} smartphone with incredible features`,
      images: [mobile.imgUrl],
    };
  }
}

// Check out the full phone specifications of the Xiaomi Redmi Note 13, including its released date, dimensions, weight, screen size, resolution, processor, camera, and more. Find the official and unofficial price for the 128GB/4GB and 128GB/6GB variants of this phone in Bangladesh 2023.
// Discover the latest ${brandName} ${model} smartphone with incredible features like ${networkBrands}, ${screenType}, ${romOption}, ${ramOption} and more. Buy now at the best price only on YourSite.com.
// "Discover the latest ${brandName} ${model} smartphone with incredible features like ${networkBrands}, ${screenType}, ${romOption}, ${ramOption}, and more. Compare prices and buy now at MobileDokan.com for the best deals on the market.";
// Samsung Galaxy S22 Ultra 5G - Features, Specs, and Price
// {
//     title: doc.title,
//     description: doc.description,
//     openGraph: {
//       title: doc.title,
//       description: doc.description,
//       type: "article",
//       url: absoluteUrl(doc.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: doc.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: doc.title,
//       description: doc.description,
//       images: [ogUrl.toString()],
//     },
//   }

// const seoData = {
//   title: `${brandName} ${model} - Buy Now at the Best Price | YourSite.com`,
//   description: `Discover the latest ${brandName} ${model} smartphone with incredible features like ${networkBrands}, ${screenType}, ${romOption}, ${ramOption} and more. Buy now at the best price only on YourSite.com.`,
//   Image
//   ogTitle: `${brandName} ${model} - Buy Now at the Best Price | YourSite.com`,
//   ogDescription: `Discover the latest ${brandName} ${model} smartphone with incredible features like ${networkBrands}, ${screenType}, ${romOption}, ${ramOption} and more. Buy now at the best price only on YourSite.com.`,
//   ogImage: `${imgUrl}`,
//   twitterTitle: `${brandName} ${model} - Buy Now at the Best Price | YourSite.com`,
//   twitterDescription: `Discover the latest ${brandName} ${model} smartphone with incredible features like ${networkBrands}, ${screenType}, ${romOption}, ${ramOption} and more. Buy now at the best price only on YourSite.com.`,
//   twitterImage: `${imgUrl}`,
//   canonical: `https://yoursite.com/${model_id}`,
// };
