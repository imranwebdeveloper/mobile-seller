import Image from "next/image";
import PriceUpdateForm from "@/components/admin/form/mobile/PriceUpdateForm";
import ContentUpdateFrom from "@/components/admin/form/mobile/ContentUpdateFrom";
import { ReduxProviders } from "@/providers/ReduxProvider";

const getData = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/mobiles/${id}` as string, {
    cache: "no-cache",
  });
  return res.json();
};

const UpdatePrice = async ({ params }: { params: { id: string } }) => {
  const { data } = await getData(params.id);

  return (
    <section className="mx-auto grid max-w-4xl grid-cols-3 gap-4 ">
      <div className=" col-span-1 flex flex-col items-center rounded border bg-primary-bg-light p-8 text-center ">
        <Image
          src={data.imgUrl}
          alt=""
          className="h-36 w-32"
          width={180}
          height={220}
        />

        <div className="mt-2 ">
          <p className="text-xl font-bold">{data.brandName}</p>
          <p>{data.model}</p>
        </div>
      </div>

      <ReduxProviders>
        <PriceUpdateForm mobile={data} />
        <ContentUpdateFrom mobile={data} />
      </ReduxProviders>
    </section>
  );
};

export default UpdatePrice;
