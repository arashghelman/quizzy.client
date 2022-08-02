import React from "react";

export default function InputText({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border-1 text-gray-800 border-gray-300 hover:border-gray-500 rounded px-4 py-2
      focus:outline-none focus:border-blue-500 focus:shadow-inputFocus"
    />
  );
}
