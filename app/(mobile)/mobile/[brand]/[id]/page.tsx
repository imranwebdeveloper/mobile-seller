import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import Content from "@/components/common/Content";
import { Mobile } from "@/types/mobile";
import Contents from "@/components/common/Contents";
import { Metadata } from "next";
import Disclaimer from "@/components/common/Disclaimer";
import MobilePriceTable from "@/components/common/MobilePriceTable";
import { notFound } from "next/navigation";
import { headers } from "@/lib/fetchHeader";

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.API_URL}/mobiles/model/${id}` as string,
    { headers: headers }
  );
  if (!res.ok) throw new Error(await res.json().then((data) => data.message));
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data }: { data: Mobile } = await getData(params.id);

  const metadata = {
    title: `${data.brandName} ${data.model} Specs, Price in Bangladesh | ${process.env.LOGO}`,
    description: `Explore the ${data.brandName} ${data.model} specifications, features, availability, and price in Bangladesh at ${process.env.LOGO}. Get detailed information about the ${data.brandName} ${data.model} and make an informed purchase decision.`,
    alternates: {
      canonical: `${
        process.env.FULL_DOMAIN_URL
      }/mobile/${data.brandName.toLowerCase()}/${params.id}`,
    },
    openGraph: {
      type: "website",
      title: `${data.brandName} ${data.model} Specs, Price in Bangladesh | ${process.env.LOGO}`,
      description: `Explore the ${data.brandName} ${data.model} specifications, features, availability, and price in Bangladesh at ${process.env.LOGO}. Get detailed information about the ${data.brandName} ${data.model} and make an informed purchase decision.`,

      url: `${
        process.env.FULL_DOMAIN_URL
      }/mobiles/${data.brandName.toLowerCase()}/${params.id}`,
      images: [
        {
          url: data.imgUrl,
          alt: "MobileSellerBD.com",
          width: 600,
          height: 315,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${data.brandName} ${data.model} Specs, Price in Bangladesh | ${process.env.LOGO}`,
      description: `Explore the ${data.brandName} ${data.model} specifications, features, availability, and price in Bangladesh at ${process.env.LOGO}. Get detailed information about the ${data.brandName} ${data.model} and make an informed purchase decision.`,
      images: data.imgUrl,
    },
  };

  return metadata;
}

const ModelDetails = async ({ params }: { params: { id: string } }) => {
  const { data }: { data: Mobile } = await getData(params.id);
  if (!data) {
    notFound();
  }
  const variant = data.variant
    .map((item) => `${item.rom}/${item.ram} GB`)
    .join(", ");
  const updateDate = format(new Date(data.updatedAt), "dd/MM/yyyy");
  const relDate = format(new Date(data.releasedDate), "dd/MM/yyyy");
  return (
    <section className="main">
      <section className="layout container py-4 ">
        <article className="mx-auto  grid grid-cols-1 md:grid-cols-3 gap-2 max-w-3xl ">
          <div className="border bg-primary-bg-light rounded flex flex-col gap-2 p-6">
            <Image
              alt={`${data.brandName} ${data.model} mobile`}
              src={data.imgUrl}
              width={150}
              height={200}
              priority
              className="w-32 h-40 mx-auto"
            />
            <div className="text-center">
              <h3 className="font-bold text-lg">{data.brandName}</h3>
              <h4>{data.model}</h4>
            </div>
          </div>
          <div className="md:col-span-2 border rounded bg-primary-bg-light p-4 md:px-8   ">
            <h1 className="mb-2">{data.model} Price in Bangladesh</h1>
            <MobilePriceTable variants={data.variant} date={updateDate} />
            <div className="mt-2 flex gap-2 border  text-sm items-center md:hidden  ">
              <p className="p-2 bg-slate-50 border-r ">Last Updated</p>
              <time dateTime={updateDate}>{updateDate}</time>
            </div>
          </div>
        </article>
        <article className="rounded border max-w-3xl mx-auto bg-primary-bg-light   tracking-tight text-sm  md:p-6 px-2 py-4    mt-2  ">
          <Content content={`${data.brandName}, ${data.model}`} title="Model" />
          <Content content={relDate} title="Rel. Date" />
          <Content content={data.networkBrands} title="Network" />
          <Content content={data.simType} title="SIM Type" />
          <Content content={data.dimension} title="Dimension" />
          <Content content={`${data.weight} gram `} title="Weight" />
          <Content content={data.build} title="Build" />
          <Content content={data.protection} title="Protection" />
          <Contents
            contents={[data.screenSize, data.screenType, data.resolution]}
            title="Display"
          />
          <Contents
            contents={[...data.mainCamera, data.mainFeatures]}
            title="Main Camera"
          />
          <Contents
            contents={[...data.fontCamera, data.frontFeatures]}
            title="Front Camera"
          />
          <Content content={data.os} title="OS" />
          <Contents
            contents={[`SD Card ${data.sdCard}`, `${variant} variants`]}
            title="Memory"
          />
          <Content content={data.processor} title="Processor" />
          <Content content={data.cpu} title="CPU" />
          <Content content={data.gpu} title="GPU" />
          <Content content={data.fingerprint} title="Fingerprint" />
          <Content content={data.battery} title="Battery" />
          <Contents contents={data.charging} title="Charging" />
          <Content content={data.port} title="Port" />
          <Content content={data.audioJack} title="Audio Jack" />
          <Content content={data.sound} title="Sound" />
          <Content content={data.wifi} title="WLAN" />
          <Content content={data.bluetooth} title="Bluetooth" />
          <Content content={data.gps} title="GPS" />
          <Content content={data.nfc} title="NFC" />
          <Content content={data.fm} title="FM" />
          <Content content={data.sensor} title="Sensor" />
          <Contents contents={data.others} title="Feature" />
          <Content content={data.color} title="Colors" none={true} />
          <Contents contents={data.inTheBox} title="In The Box" none={true} />
        </article>
      </section>
      <Disclaimer />
    </section>
  );
};

export default ModelDetails;
