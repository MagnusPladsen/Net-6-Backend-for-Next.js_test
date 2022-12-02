import React from "react";

export default function Input({
  type,
  placeholder,
  onChange,
  handleSubmitDiscount,
  error,
}: {
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitDiscount?: () => void;
  error?: boolean;
}) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !!handleSubmitDiscount) {
      handleSubmitDiscount();
    }
  };
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`${
          error ? "border-red-600" : ""
        } border hover:border-secondary`}
      />
    </>
  );
}
