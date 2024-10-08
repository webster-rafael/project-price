import { MdOutlineArrowOutward } from "react-icons/md";
interface Title {
  title: string;
}

const Button = ({ title }: Title) => {
  return (
    <button className="h-14 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900 hover:bg-blue-600 hover:scale-105 rounded-lg px-5 flex justify-center items-center font-semibold gap-2">
      {title} <MdOutlineArrowOutward className="size-6" />
    </button>
  );
};

export default Button;
