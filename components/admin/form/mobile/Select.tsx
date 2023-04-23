import { useDispatch } from "react-redux";
import { handleInput } from "../../../redux/slices/mobileSlice";

interface Props {
  identity: string;
  title: string;
  options: any;
}

const Select: React.FC<Props> = ({ identity, title, options }) => {
  const dispatch = useDispatch();
  const inputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(handleInput({ name: identity, value: e.target.value }));
  };
  return (
    <div className="flex items-center">
      <label className="w-[130px]">{title}</label>
      <select
        className="w-full rounded-md border p-3 font-bold text-inherit outline-none"
        onChange={inputHandler}
      >
        <option >Select {title}</option>
        {options.map((option: string, i: number) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
