import useFormContext from "../hook/useFormContext";

interface ResultsProps {
  dateName: string;
}

export default function ResultsElement({ dateName }: ResultsProps) {
  const { day, month, year } = useFormContext();

  const date = new Date();
  const yearNow = date.getFullYear();
  const monthNow = date.getUTCMonth() + 1;
  const dayNow = date.getDate();

  const age = yearNow - year;

  const dateCheck = () => {
    if (day == 0 || month == 0 || year == 0) {
      return false;
    }

    if (dateName === "years") {
      return age;
    }

    if (dateName === "months") {
      if (monthNow < month) {
        age - 1;
      } else if (monthNow >= month) {
        if (dayNow < day) [age - 1];
      }
      return monthNow - month;
    }

    if (dateName === "days") {
      if (day > dayNow) {
        return day - dayNow;
      } else if (day < dayNow) {
        return dayNow - day;
      }
    }
  };
  return (
    <li className=" -mb-4">
      <p className="flex text-[48px] text-purple sm:text-[70px] font-extrabold italic ">
        {!dateCheck() ? "--" : dateCheck()}
        <span className="text-black mr-3">{dateName}</span>
      </p>
    </li>
  );
}
