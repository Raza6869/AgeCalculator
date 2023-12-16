import { useContext } from "react";
import FormContext from "../context/FormContext";

export default function useFormContext() {
  const context = useContext(FormContext);

  return context;
}
