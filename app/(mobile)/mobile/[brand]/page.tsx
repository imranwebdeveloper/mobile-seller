import MobileCardContainer from "@/components/common/MobileCardContainer";
import Pagination from "@/components/common/Pagination";

const getData = async (slug: string, pageNumber?: string) => {
  let url: string;
  url = pageNumber
    ? (`${process.env.API_URL}/mobiles/brand/${slug}?page=${pageNumber}` as string)
    : (`${process.env.API_URL}/mobiles/brand/${slug}` as string);

  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
};

const BrandModelList = async ({
  params,
  searchParams,
}: {
  params: { brand: string };
  searchParams: { page: string };
}) => {
  const {
    data: { parPage, count, mobiles },
  } = await getData(params.brand, searchParams.page);
  const currenPage = parseInt(searchParams.page);

  return (
    <div className="main">
      <section className="layout container">
        <div className="mb-2 mt-4">
          <h1>{`${params.brand.toUpperCase()} MOBILES  `}</h1>
        </div>
        <MobileCardContainer data={mobiles} />
        {mobiles.length >= parPage && (
          <Pagination
            path={`mobile/${params.brand}`}
            parPage={parPage}
            totalProduct={count}
            currenPage={currenPage ? currenPage : 1}
          />
        )}
      </section>
    </div>
  );
};

export default BrandModelList;
