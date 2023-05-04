import SubHeader from "@/components/container/header/SubHeader";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import Content from "@/components/common/Content";
import { Mobile } from "@/types/mobile";
import Contents from "@/components/common/Contents";
import { Metadata } from "next";
import { MobileMetaData } from "@/lib/MobileMetaData";
import Disclaimer from "@/components/common/Disclaimer";

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.API_URL}/mobiles/model/${id}` as string,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

// export async function generateMetadata({ params }: any): Promise<Metadata> {
//   const { data } = await getData(params.id);
//   const metaData = new MobileMetaData(data);
//   return metaData;
// }

const ModelDetails = async ({ params }: { params: { id: string } }) => {
  const res = await getData(params.id);
  const data: Mobile = res.data;
  const variant = data.variant
    .map((item: any) => `${item.rom}/${item.ram} GB`)
    .join(", ");
  const updateDate = format(new Date(data.updatedAt), "dd/MM/yyyy");
  const relDate = format(new Date(data.releasedDate), "dd/MM/yyyy");
  return (
    <main className="main">
      <section className="layout container ">
        <section className="py-4">
          <article className="mx-auto  grid grid-cols-3 gap-2 max-w-4xl text-sm  ">
            <div className="border bg-primary-bg-light border-b ght rounded flex flex-col gap-2 p-4">
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
            <div className="col-span-2 border rounded bg-primary-bg-light ght py-4 px-6 ">
              <h1 className="mb-2">{data.model} Price in Bangladesh</h1>
              <div className="grid grid-cols-4">
                <ul className="text-center">
                  <li className="font-semibold bg-slate-100 p-1 border-y  border-l   ">
                    Variants
                  </li>
                  {data.variant.map((item: any, index: number) => {
                    return (
                      <li key={index} className="p-1 border-b border-l ">
                        {item.rom}/{item.ram} GB
                      </li>
                    );
                  })}
                </ul>
                <ul className="text-center">
                  <li className="font-semibold bg-slate-100 p-1 border-y ">
                    Official
                  </li>
                  {data.variant.map((item: any, index: number) => {
                    return (
                      <li key={index} className="p-1 border-b border-l ">
                        {item.official ? `${item.official} Tk` : "-"}
                      </li>
                    );
                  })}
                </ul>
                <ul className="text-center">
                  <li className="font-semibold bg-slate-100 p-1 border-y ">
                    Unofficial
                  </li>
                  {data.variant.map((item: any, index: number) => {
                    return (
                      <p key={index} className="p-1 border-b border-l ">
                        {item.unofficial ? `${item.unofficial} Tk` : "-"}
                      </p>
                    );
                  })}
                </ul>
                <ul className="text-center flex flex-col">
                  <li className="font-semibold bg-slate-100 p-1 border-y border-r ">
                    Last Updated
                  </li>
                  <li className="p-1 flex-1 flex items-center justify-center border-b border-r border-l">
                    {updateDate}
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="rounded border max-w-4xl mx-auto bg-primary-bg-light px-8 py-6 mt-2 text-sm ">
            <h1 className="pb-2 text-center underline">
              {data.model} Mobile Specifications
            </h1>

            <Content
              content={`${data.brandName}, ${data.model}`}
              title="Model"
            />
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
            <Content content={data.color} title="Colors" />
            <Contents contents={data.inTheBox} title="In The Box" />
          </article>
        </section>
      </section>
      <Disclaimer />
    </main>
  );
};

export default ModelDetails;
