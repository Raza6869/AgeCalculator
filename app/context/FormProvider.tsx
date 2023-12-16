"use client";
import { useState } from "react";
import FormContext from "./FormContext";

interface ProviderProps {
  children: React.ReactNode;
}

export default function FormProvider({ children }: ProviderProps) {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  return (
    <FormContext.Provider
      value={{
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        dayError,
        setDayError,
        monthError,
        setMonthError,
        yearError,
        setYearError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
