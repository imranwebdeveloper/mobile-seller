import "./globals.css";

export const metadata = {
  title: `Latest Mobile Price in Bangladesh ${new Date().getFullYear()} | ${
    process.env.LOGO
  }`,
  description: `Find latest official mobile phone, smartphone, android, feature phone etc. latest updated prices in Bangladesh 2023 at ${process.env.LOGO}`,
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
