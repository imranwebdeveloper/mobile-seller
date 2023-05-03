"use client";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../../shared/Loading";
import { toast } from "react-hot-toast";
import { RootState } from "@/redux/store";
import { Variant } from "@/types/Variant";
import { useUpdateMobilePriceMutation } from "@/redux/api/adminApiSlice";
import { updateOfficialPrice } from "@/redux/slices/mobileUpdateSlice";

const PriceUpdateForm: React.FC = () => {
  const dispatch = useDispatch();
  const [updateMobilePrice, { isLoading, isError, error, isSuccess }] =
    useUpdateMobilePriceMutation();

  const { variants, mobile } = useSelector(
    (state: RootState) => state.mobileUpdate
  );

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;
    const index = parseInt(e.target.name.split("-")[1]);
    const variant = e.target.name.split("-")[0] as "official" | "unofficial";
    dispatch(updateOfficialPrice({ index, price, variant }));
  };

  const submitHandler = () => {
    updateMobilePrice({ id: mobile?._id, variants });
  };

  if (isSuccess) {
    toast.success("Prices updated");
  }
  return (
    <div className="col-span-2 flex flex-col gap-2 rounded border bg-white p-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="mb-2 grid grid-cols-3 bg-slate-50 py-2 font-bold   ">
            <p>Variant</p>
            <p>Official Price</p> <p>Unofficial Price</p>
          </div>

          {variants.map((item: Variant, i: number) => {
            return (
              <div key={i} className="flex gap-2">
                <p className="flex w-full items-center">
                  {item.rom}/{item.ram} GB
                </p>
                <input
                  type="number"
                  name={`official-${i}`}
                  className=" w-full rounded-md border p-3 outline-none "
                  placeholder="Official "
                  defaultValue={item.official}
                  onChange={handlePrice}
                />

                <input
                  type="number"
                  className=" w-full rounded-md border p-3 outline-none "
                  placeholder="Unofficial"
                  name={`unofficial-${i}`}
                  defaultValue={item.unofficial}
                  onChange={handlePrice}
                />
              </div>
            );
          })}
          <div className="mt-2 flex justify-center">
            <button
              type="button"
              className="btn-primary btn "
              onClick={submitHandler}
            >
              Update Price
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceUpdateForm;
