import { FC } from "react";

interface Props {
  name: string;
  num: string;
}
const SectionTitle: FC<Props> = ({ name, num }) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="text-base md:text-lg text-primary dark:text-textGreen mr-2">
        {num}
      </span>
      {name}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
