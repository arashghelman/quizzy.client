import React from "react";

export default function InputText({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border-1 text-gray-800 border-gray-300 rounded px-4 py-2 
      focus:ring-4 focus:outline-none focus:border-blue-500"
    />
  );
}
