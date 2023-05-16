import Link from "next/link";
import MobileCardContainer from "@/components/common/MobileCardContainer";
import { notFound } from "next/navigation";
import { Mobile } from "@/types/mobile";
import { headers } from "@/lib/fetchHeader";

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/mobiles/latest` as string, {
    headers: headers,
  });
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

const Home = async () => {
  const { data } = await getData();

  if (!data) {
    notFound();
  }
  const { mobiles }: { mobiles: Mobile[] } = data;
  return (
    <section className="main">
      <section className="layout container">
        <div className="my-2 mt-4">
          <h1 className="text-2xl">Latest Mobile Phones Price in Bangladesh</h1>
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
      </section>
    </section>
  );
};
export default Home;
