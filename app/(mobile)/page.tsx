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
            <h1 className="text-2xl">
              Latest Mobile Phones Price in Bangladesh
            </h1>
          </div>
          {/* @ts-expect-error Server Component */}
          <NewMobilesContainer path="mobiles/latest" />
          <div className="flex justify-center mt-2">
            <Link
              href={{ pathname: "mobile/latest", query: { page: "2" } }}
              className="btn-primary"
            >
              More Mobiles
            </Link>
          </div>
        </Suspense>
      </section>
    </section>
  );
};
export default Home;
