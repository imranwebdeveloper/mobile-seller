"use client";

import ArrayInput from "@/components/admin/form/mobile/ArrayInput";
import Input from "@/components/admin/form/mobile/Input";
import InputFile from "@/components/admin/form/mobile/InputFile";
import MobileFormValidator from "@/components/admin/form/mobile/MobileFormValidator";
import Select from "@/components/admin/form/mobile/Select";
import VariantInput from "@/components/admin/form/mobile/VariantInput";
import Accordion from "@/components/admin/shared/Accordion";
import { RootState } from "@/redux/store";
import LoadingSmall from "@/components/admin/shared/LoadingSmall";
import { useAddNewMobileMutation } from "@/redux/api/adminApiSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const AddNew = () => {
  const [img, setImg] = useState("");

  const newMobile = useSelector((state: RootState) => state.mobileInfo);
  const [addNewMobile] = useAddNewMobileMutation();
  const saveNewMobile = async () => {
    try {
      const key = process.env.REACT_APP_IMGDB_API_KEY;
      const formData = new FormData();
      formData.append("image", img);
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
        method: "POST",
        body: formData,
      });
      const { data } = await res.json();
      const payload = await addNewMobile({
        ...newMobile,
        imgUrl: data.url,
      }).unwrap();
      if (payload?.message) toast.success("New Mobile added successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section className="mx-auto mb-4 max-w-4xl">
      <div className=" mb-2 flex justify-end gap-4">
        <button className="btn-primary" onClick={saveNewMobile}>
          Submit
        </button>
      </div>
      <Accordion heading="General Info">
        <>
          <div className="mt-3 mb-4  grid grid-cols-2 gap-2">
            <Select
              identity="brandName"
              title="Brand"
              options={[
                "Apple",
                "Samsung",
                "Google",
                "OnePlus",
                "Huawei",
                "Sony",
                "LG",
                "Motorola",
                "Nokia",
                "Realme",
                "Oppo",
                "Vivo",
                "Xiaomi",
                "Asus",
                "ZTE",
                "HTC",
                "HP",
                "Honor",
                "Gionee",
                "Infinix",
                "Intex",
                "Lava",
                "Lenovo",
                "Meizu",
                "Micromax",
                "Microsoft",
                "Panasonic",
                "Philips",
                "Razer",
                "Spice",
                "TCL",
                "Tecno",
                "Toshiba",
              ]}
            />
            <Select
              identity="category"
              title="Mobile Type"
              options={["Smartphone ", "Feature", "Tab", "Pad"]}
            />
            <Input label="Model" name="model" />
            <Input label="Date" type="date" name="releasedDate" />
            <InputFile setImg={setImg} />
            <Input label="Network" name="networkBrands" />
            <Input label="SIM type" name="simType" />
          </div>
          <MobileFormValidator
            twoColumnContent={[
              {
                title: "Brand",
                content: newMobile.brandName,
              },
              {
                title: "Category",
                content: newMobile.category,
              },
              {
                title: "Model",
                content: newMobile.model,
              },
              {
                title: "Release Date",
                content: newMobile.releasedDate,
              },
              {
                title: "Network",
                content: newMobile.networkBrands,
              },
              {
                title: "SIM Type",
                content: newMobile.simType,
              },
            ]}
          />
        </>
      </Accordion>

      <Accordion heading="Body Info">
        <>
          <div className="mt-3 mb-2  grid grid-cols-2 gap-2">
            <Input label="Dimension" name="dimension" />
            <Input label="Weight" name="weight" />
            <Input label="Build" name="build" />
            <Input label="Screen size" name="screenSize" />
            <Input label="Screen type" name="screenType" />
            <Input label="Resolution" name="resolution" />
          </div>
          <Input label="Protection" name="protection" />

          <div className="mt-4">
            <MobileFormValidator
              fullWidthContent={[
                {
                  title: "Protection",
                  content: newMobile.protection,
                },
              ]}
              twoColumnContent={[
                {
                  title: "Dimension",
                  content: newMobile.dimension,
                },
                {
                  title: "Weight",
                  content: newMobile.weight,
                },
                {
                  title: "Build",
                  content: newMobile.build,
                },
                {
                  title: "Screen size",
                  content: newMobile.screenSize,
                },
                {
                  title: "Screen type",
                  content: newMobile.screenSize,
                },
                {
                  title: "Resolution",
                  content: newMobile.resolution,
                },
              ]}
            />
          </div>
        </>
      </Accordion>

      <Accordion heading="Camera Info">
        <>
          <ArrayInput label="Main" name="mainCamera" />
          <Input label="Features" name="mainFeatures" />
          <ArrayInput label="Front " name="fontCamera" />
          <Input label="Features" name="frontFeatures" />

          <div className="mt-4">
            <MobileFormValidator
              fullWidthContent={[
                {
                  title: "Main Features",
                  content: newMobile.mainFeatures,
                },
                {
                  title: "Font Features",
                  content: newMobile.frontFeatures,
                },
              ]}
              ArrayContent={[
                {
                  title: "Main Camera",
                  content: [...newMobile.mainCamera],
                },
                {
                  title: "Font Camera",
                  content: [...newMobile.fontCamera],
                },
              ]}
            />
          </div>
        </>
      </Accordion>

      <Accordion heading="Basic Info">
        <>
          <VariantInput name="variant" />
          <div className="mt-3 mb-2  grid grid-cols-2 gap-2">
            <Input label="ROM Options" name="romOption" />
            <Input label="RAM Options" name="ramOption" />
            <Input label="SD Card" name="sdCard" />
            <Input label="OS" name="os" />
            <Input label="Fingerprint" name="fingerprint" />
            <Input label="Processor" name="processor" />
            <Input label="CPU" name="cpu" />
            <Input label="GPU" name="gpu" />
            <Input label="Battery" name="battery" />
            <Input label="PORT" name="port" />
            <Input label="Audio Jack" name="audioJack" />
            <Input label="Sound" name="sound" />
          </div>
          <ArrayInput label="Charging" name="charging" />
          <Input label="Color Variant " name="color" />

          <div className="mt-4">
            <MobileFormValidator
              fullWidthContent={[
                {
                  title: "Color Variant",
                  content: newMobile.color,
                },
              ]}
              twoColumnContent={[
                {
                  title: "ROM Options",
                  content: newMobile.romOption,
                },
                {
                  title: "RAM Options",
                  content: newMobile.ramOption,
                },
                {
                  title: "SD Card",
                  content: newMobile.sdCard,
                },
                {
                  title: "OS",
                  content: newMobile.os,
                },
                {
                  title: "Fingerprint",
                  content: newMobile.fingerprint,
                },
                {
                  title: "Processor",
                  content: newMobile.processor,
                },
                {
                  title: "CPU",
                  content: newMobile.cpu,
                },
                {
                  title: "GPU",
                  content: newMobile.gpu,
                },
                {
                  title: "Battery",
                  content: newMobile.battery,
                },
                {
                  title: "PORT",
                  content: newMobile.port,
                },
                {
                  title: "Audio Jack",
                  content: newMobile.audioJack,
                },
                {
                  title: "Sound",
                  content: newMobile.sound,
                },
              ]}
              ArrayContent={[
                {
                  title: "Charging",
                  content: [...newMobile.charging],
                },
                {
                  title: "Variants",
                  content: [
                    ...newMobile.variant.map(
                      (item: any) => `${item.rom}/${item.ram} GB,`
                    ),
                  ],
                },
              ]}
            />
          </div>
        </>
      </Accordion>

      <Accordion heading="Connectivity">
        <>
          <div className="mt-3 mb-2  grid grid-cols-2 gap-2">
            <Input label="Wi-Fi" name="wifi" />
            <Input label="Bluetooth" name="bluetooth" />
            <Input label="GPS" name="gps" />
            <Input label="OTG" name="otg" />
            <Input label="FM" name="fm" />
            <Input label="NFC" name="nfc" />
          </div>

          <MobileFormValidator
            twoColumnContent={[
              {
                title: "Wi-Fi",
                content: newMobile.wifi,
              },
              {
                title: "Bluetooth",
                content: newMobile.bluetooth,
              },
              {
                title: "GPS",
                content: newMobile.gps,
              },
              {
                title: "OTG",
                content: newMobile.otg,
              },
              {
                title: "FM",
                content: newMobile.fm,
              },
              {
                title: "NFC",
                content: newMobile.nfc,
              },
            ]}
          />
        </>
      </Accordion>

      <Accordion heading="Features">
        <>
          <div className="mt-2">
            <Input label="Sensor" name="sensor" />
            <ArrayInput label="Others" name="others" />
          </div>

          <div className="mt-4">
            <MobileFormValidator
              fullWidthContent={[
                {
                  title: "Sensor",
                  content: newMobile.sensor,
                },
              ]}
              ArrayContent={[
                {
                  title: "Other",
                  content: [...newMobile.others],
                },
              ]}
            />
          </div>
        </>
      </Accordion>

      <Accordion heading="Others">
        <>
          <ArrayInput label="In The Box" name="inTheBox" />

          <div className="mt-4">
            <MobileFormValidator
              ArrayContent={[
                {
                  title: "In The Box",
                  content: [...newMobile.inTheBox],
                },
              ]}
            />
          </div>
        </>
      </Accordion>
    </section>
  );
};

export default AddNew;
