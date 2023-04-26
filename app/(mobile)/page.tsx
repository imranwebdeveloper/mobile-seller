import SubHeader from "@/components/container/header/SubHeader";
import NewMobilesContainer from "@/components/container/main/NewMobilesContainer";
import { Suspense } from "react";
import LoadingPage from "../(admin)/admin/loading";
import PhoneCategory from "@/components/common/PhoneCategory";
import Link from "next/link";
import PriceRange from "@/components/common/PriceRange";

const Home = async () => {
  return (
    <section className="main">
      <section className="layout container">
        <SubHeader />
        <PriceRange />
        <PhoneCategory />
        <Suspense fallback={<LoadingPage />}>
          <div className="my-2 mt-4">
            <h1>Top Mobiles</h1>
          </div>
          {/* @ts-expect-error Server Component */}
          <NewMobilesContainer path="mobiles" />
          <div className="mb-2 mt-4">
            <h1>New Mobiles</h1>
          </div>
          {/* @ts-expect-error Server Component */}
          <NewMobilesContainer path="mobiles" />
        </Suspense>
      </section>
    </section>
  );
};
export default Home;
