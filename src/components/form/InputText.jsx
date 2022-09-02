import React from "react";

export default function InputText({
  id,
  placeholder,
  defaultValue,
  isInvalid,
  register,
}) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...register()}
      className={`border-1 text-gray-800 border-gray-300 hover:border-gray-500 rounded px-4 py-2
      focus:outline-none focus:border-blue-500 focus:shadow-focus ${
        isInvalid && "border-red-500"
      }`}
    />
  );
}
