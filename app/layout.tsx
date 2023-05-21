import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Lato } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

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
        url: "https://firebasestorage.googleapis.com/v0/b/mobile-seller-e6165.appspot.com/o/logo.png?alt=media&token=e20206ed-013e-4fe7-a6e4-567de9d2838d",
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
    images:
      "https://firebasestorage.googleapis.com/v0/b/mobile-seller-e6165.appspot.com/o/logo.png?alt=media&token=e20206ed-013e-4fe7-a6e4-567de9d2838d",
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
    <html lang="en" className={lato.className}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W7NHE0JT3Z"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-W7NHE0JT3Z');`}
      </Script>
      <body>{children}</body>
    </html>
  );
}
