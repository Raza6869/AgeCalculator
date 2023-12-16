"use client";
import { createContext } from "react";

const FormContext = createContext({} as ContextTypes);

interface ContextTypes {
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  dayError: string;
  setDayError: React.Dispatch<React.SetStateAction<string>>;
  monthError: string;
  setMonthError: React.Dispatch<React.SetStateAction<string>>;
  yearError: string;
  setYearError: React.Dispatch<React.SetStateAction<string>>;
}

export default FormContext;
