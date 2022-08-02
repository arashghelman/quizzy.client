import React from "react";
import * as BsIcons from "react-icons/bs";

export default function InputSelect({
  label,
  id,
  value,
  type = "radio",
  register,
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer relative text-gray-800 group">
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        {...register()}
        className="appearance-none absolute peer"
      />
      <span
        className={`border-2 border-gray-300 w-5 h-5 ${
          type === "radio" ? "rounded-full" : "rounded"
        }
        hover:border-gray-500 hover:bg-gray-100
        peer-checked:bg-blue-500 peer-checked:border-blue-500
        peer-focus:ring-4`}
      ></span>
      <BsIcons.BsCheck
        className="absolute text-white w-5 h-5
        invisible peer-checked:visible"
      />
      {label}
    </label>
  );
}
