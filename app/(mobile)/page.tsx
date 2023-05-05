import Link from "next/link";
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
