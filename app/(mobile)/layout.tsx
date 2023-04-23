import Footer from "@/components/container/footer/Footer";
import Header from "@/components/container/header/Header";

import React from "react";
interface MobileLayoutProps {
  children?: React.ReactNode;
}

const layout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="root flex-1 ">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
