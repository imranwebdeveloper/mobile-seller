import SubHeader from "@/components/container/header/SubHeader";
import { Suspense } from "react";
import LoadingPage from "../(admin)/admin/loading";
import PhoneCategory from "@/components/common/PhoneCategory";
import Link from "next/link";
import PriceRange from "@/components/common/PriceRange";
import MobileCardContainer from "@/components/common/MobileCardContainer";
const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/mobiles/latest` as string, {
    cache: "no-cache",
  });
  return res.json();
};

const Home = async () => {
  const {
    data: { mobiles },
  } = await getData();

  return (
    <section className="main">
      <section className="layout container">
        <Suspense fallback={<LoadingPage />}>
          <div className="my-2 mt-4">
            <h1 className="text-2xl">
              Latest Mobile Phones Price in Bangladesh
            </h1>
          </div>
          <MobileCardContainer data={mobiles} />
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
