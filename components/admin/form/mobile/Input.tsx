import { useDispatch } from "react-redux";
import { handleInput } from "../../../redux/slices/mobileSlice";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, value }) => {
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(handleInput({ name, value }));
  };

  return (
    <div className={`flex w-full items-center justify-between`}>
      <label className="min-w-[100px] text-sm ">{label}</label>
      <input
        name={name}
        type={type ? type : "text"}
        className=" w-full rounded-md border p-3 outline-none "
        onChange={inputHandler}
        defaultValue={value ? value : ""}
      />
    </div>
  );
};

export default Input;
