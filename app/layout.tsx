import { MetaData } from "@/lib/metaData";
import "./globals.css";

export const metadata = MetaData.Home;

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
