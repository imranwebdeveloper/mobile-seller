import PhoneCategory from "@/components/common/PhoneCategory";
import PriceRange from "@/components/common/PriceRange";
import Footer from "@/components/container/footer/Footer";
import Header from "@/components/container/header/Header";
import SubHeader from "@/components/container/header/SubHeader";

import React from "react";

interface MobileLayoutProps {
  children?: React.ReactNode;
}

const layout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="main">
        <section className="layout container">
          <SubHeader />
          <PriceRange />
          <PhoneCategory />
        </section>
      </section>
      <main className="root flex-1 ">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
