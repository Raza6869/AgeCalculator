///next imports
import Image from "next/image";
import { useState } from "react";
//components
import FormInput from "./formInput";
//media
import arrowIcon from "@/assets/images/icon-arrow.svg";
//context
import useFormContext from "../hook/useFormContext";

export default function Form() {
  const {
    dayError,
    monthError,
    yearError,
    setDay,
    setMonth,
    setYear,
    setDayError,
    setMonthError,
    setYearError,
  } = useFormContext();

  const [sucess, setSucess] = useState(false);
  const [leapYear, setLeapYear] = useState(false);

  const HandleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const dayNow = new Date().getDate();
    const monthNow = new Date().getUTCMonth() + 1;
    const yearNow = new Date().getFullYear();

    const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const target = event.target as typeof event.target & {
      day: { value: number };
      month: { value: number };
      year: { value: number };
    };

    if (target.day.value === null || undefined || !target.day.value) {
      setDayError("This field is required");
      return setSucess(false);
    } else if (target.day.value > 31 || target.day.value <= 0) {
      setDayError("Must be a valid day");
      return setSucess(false);
    } else if (target.year.value == yearNow) {
      if (target.day.value > dayNow) {
        setDayError("Must be in the past");
        return setSucess(false);
      }
    }

    if (target.month.value === null || undefined || !target.month.value) {
      setMonthError("This field is required");
      return setSucess(false);
    } else if (target.month.value > 12 || target.month.value <= 0) {
      setMonthError("Must be a valid month");
      return setSucess(false);
    } else if (target.year.value == yearNow) {
      if (target.month.value > monthNow) {
        setMonthError("Must be in the past");
        return setSucess(false);
      }
    }

    if (target.month.value == 1 || target.month.value > 2) {
      if (target.day.value > listOfDays[target.month.value - 1]) {
        setDayError("Must be a valid day");
        return setSucess(false);
      }
    } else if (target.month.value == 2) {
      if (
        (!(target.year.value % 4) && target.year.value % 100) ||
        target.year.value % 400
      ) {
        setLeapYear(true);
      }

      if (leapYear == false && target.day.value >= 29) {
        setDayError("Must be a valid day");
        return setSucess(false);
      } else if (leapYear == true && target.day.value > 29) {
        setDayError("Must be a valid day");
        return setSucess(false);
      }
    }

    if (target.year.value === null || undefined || !target.year.value) {
      setYearError("This field is required");
      return setSucess(false);
    } else if (target.year.value > yearNow) {
      setYearError("Must be in the past");
      return setSucess(false);
    } else if (target.year.value <= 0) {
      setYearError("Must be a valid year");
      return setSucess(false);
    }

    setSucess(true);

    if (!sucess) {
      return false;
    } else {
      setDayError("");
      setMonthError("");
      setYearError("");

      setDay(target.day.value);
      setMonth(target.month.value);
      setYear(target.year.value);
    }
    return console.log(target.day.value, target.month.value, target.year.value);
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className=" flex gap-4 sm:gap-6 border-b-2 h-32 w-full justify-center sm:justify-start items-start"
    >
      <div>
        <FormInput
          label="day"
          placeholder="dd"
          classname={dayError === "" ? "input" : "input-error"}
          formError={dayError}
        />
      </div>

      <div>
        <FormInput
          label="month"
          placeholder="mm"
          classname={monthError === "" ? "input" : "input-error"}
          formError={monthError}
        />
      </div>
      <div>
        <FormInput
          label="year"
          placeholder="yyyy"
          classname={yearError === "" ? "input" : "input-error"}
          formError={yearError}
        />
      </div>
      <button
        className="bg-purple rounded-full p-5 absolute top-[29%] right-8 transition-all ease-in-out duration-300 hover:bg-off-black"
        type="submit"
        title="calculate button"
      >
        <Image className="w-6" src={arrowIcon} alt="arrow icons" />
      </button>
    </form>
  );
}
