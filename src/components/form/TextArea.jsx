import React from "react";

export default function TextArea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      cols="2"
      className="rounded text-gray-800 border-gray-300 hover:border-gray-500 border-1 resize-none px-4 py-2 
      focus:outline-none focus:border-blue-500 focus:shadow-inputFocus"
    />
  );
}
