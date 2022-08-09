import React from "react";

export default function TextArea({ id, placeholder, isInvalid, register }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      cols="2"
      {...register()}
      className={`rounded text-gray-800 border-gray-300 hover:border-gray-500 border-1 resize-none px-4 py-2 
      focus:outline-none focus:border-blue-500 focus:shadow-focus
      ${isInvalid && "border-red-500"}`}
    />
  );
}
