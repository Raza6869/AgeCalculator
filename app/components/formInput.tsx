interface FormInputProps {
  label: string;
  placeholder: string;
  classname: string;
  formError: string;
}

export default function FormInput({
  label,
  placeholder,
  classname,
  formError,
}: FormInputProps) {
  return (
    <div className="flex gap-1 flex-col justify-center items-start">
      <label className={formError === "" ? "label" : "label-error"}>
        {label}
      </label>
      <input
        className={classname}
        type="number"
        id={label}
        placeholder={placeholder}
        name="date"
      />
      <span className="error">{formError}</span>
    </div>
  );
}
