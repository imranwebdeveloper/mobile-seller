import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInput, removeInput } from "../../../redux/slices/mobileSlice";

const VariantInput: React.FC<{ name: string }> = ({ name }) => {
  const [rom, setRom] = useState("");
  const [ram, setRam] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="my-2 flex items-center justify-between gap-2">
      <label className="min-w-[90px] text-sm ">Variant</label>

      <div className="flex items-center gap-2">
        <input
          name="rom"
          type="text"
          value={rom}
          className=" input-md input-bordered input w-full "
          placeholder="ROM"
          onChange={(e) => setRom(e.target.value)}
        />
        <input
          name="ram"
          value={ram}
          type="text"
          className="input-md input-bordered input w-full "
          placeholder="RAM"
          onChange={(e) => setRam(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 text-sm font-bold">
        <button
          className=" rounded bg-green-600 px-6 py-2 text-white"
          onClick={() => {
            dispatch(
              addInput({
                name,
                value: { rom, ram, official: "", unofficial: "" },
              })
            );
            setRom("");
            setRam("");
          }}
        >
          Add
        </button>
        <button
          className=" rounded bg-red-600 px-6 py-2 text-white "
          onClick={() => dispatch(removeInput(name))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default VariantInput;
