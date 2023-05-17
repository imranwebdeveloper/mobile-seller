import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `Latest Mobile Price in Bangladesh ${new Date().getFullYear()} | ${
    process.env.LOGO
  }`,
  alternates: {
    canonical: process.env.FULL_DOMAIN_URL,
  },
  description: `Find latest official mobile phone, smartphone, android, feature phone etc. latest updated mobile prices in Bangladesh 2023 at ${process.env.LOGO}`,
  applicationName: process.env.LOGO,
  robots: "index,follow",
  openGraph: {
    type: "website",
    title: `Latest Mobile Price in Bangladesh ${new Date().getFullYear()} | ${
      process.env.LOGO
    }`,

    description: `Find latest official mobile phone, smartphone, android, feature phone etc. latest updated mobile prices in Bangladesh 2023 at ${process.env.LOGO}`,
    url: process.env.FULL_DOMAIN_URL,
    images: [
      {
        url: `${process.env.FULL_DOMAIN_URL}/logo.png`,
        alt: "MobileSellerBD.com",
        width: 600,
        height: 315,
      },
    ],
    siteName: process.env.LOGO,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `Latest Mobile Price in Bangladesh ${new Date().getFullYear()} | ${
      process.env.LOGO
    }`,

    description: `Find latest official mobile phone, smartphone, android, feature phone etc. latest updated mobile prices in Bangladesh 2023 at ${process.env.LOGO}`,
    images: `${process.env.FULL_DOMAIN_URL}/logo.png`,
  },
  metadataBase: new URL(process.env.API_URL as string),
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
