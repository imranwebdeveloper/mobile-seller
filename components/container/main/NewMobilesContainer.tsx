import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (path: string) => {
  const res = await fetch(`${process.env.API_URL}/mobiles/${path}` as string, {
    cache: "no-cache",
  });
  return res.json();
};

const NewMobilesContainer = async ({ path }: { path: string }) => {
  const { data } = await getData(path);
  const mobiles = [...data, ...data];
  return (
    <section className="card-container rounded  bg-primary-bg-light dark:bg-primary-bg-dark p-4 border dark:border-primary-bg-dark ">
      {data.length === 0 && (
        <h3 className="font-bold text-center ">No data found</h3>
      )}
      {mobiles.map((item: any) => {
        return (
          <Link
            key={item._id}
            href={`${item.brandName.toLowerCase()}/${item.model_id}`}
          >
            <article className="transition cursor-pointer hover:scale-105  flex flex-col gap-1 p-4">
              <header>
                <Image
                  src={item.imgUrl}
                  width={100}
                  height={120}
                  priority
                  alt={`${item.brandName} ${item.model} mobile`}
                  className="w-24 h-28 mx-auto"
                />
              </header>

              <main className="text-sm text-center">
                <h4 className="font-bold">{item.brandName}</h4>
                <p>{item.model}</p>
              </main>
              <footer>
                <p className="text-sm text-center font-bold text-link-text-light">
                  {item.variant[0].unofficial
                    ? `${item.variant[0]?.unofficial} Tk.`
                    : "N/A"}
                </p>
              </footer>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default NewMobilesContainer;
