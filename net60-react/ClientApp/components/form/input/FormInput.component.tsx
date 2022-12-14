import { useField } from "formik";
import { useMemo } from "react";
import RenderError from "../../messages/RenderError.component";

export default function FormInput({
  name,
  type,
  label,
}: {
  name: string;
  type: string;
  label: string;
}) {
  const [field, meta] = useField(name);

  const isError = useMemo(() => !!meta.error && !!meta.touched, [meta]);

  return (
    <>
      <label htmlFor={name} className="">
        {label}
      </label>
      <div className="mb-4 mt-1">
        <input
          className={`${
            isError ? "border-red-600" : ""
          } hover:border-secondary bg-[#fafafa]  `}
          id={name}
          name={name}
          type={type}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
        />
        {isError ? <RenderError message={meta.error!} /> : null}
      </div>
    </>
  );
}
