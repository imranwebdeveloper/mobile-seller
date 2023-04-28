import MobileCardContainer from "@/components/common/MobileCardContainer";
import SubHeader from "@/components/container/header/SubHeader";
const getData = async (slug: string) => {
  const res = await fetch(
    `${process.env.API_URL}/mobiles/brand/${slug}` as string,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

const BrandModelList = async ({ params }: { params: { brand: string } }) => {
  const { data } = await getData(params.brand);
  return (
    <div className="main">
      <section className="layout container">
        <SubHeader />
        <div className="mb-2 mt-4">
          <h1>{`${params.brand.toUpperCase()} MOBILES  `}</h1>
        </div>
        <MobileCardContainer data={data} />
      </section>
    </div>
  );
};

export default BrandModelList;
