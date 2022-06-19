import React from "react";

export default function FormInputTextArea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="bg-transparent w-full text-2xl py-20 text-center resize-none 
        text-gray-base placeholder:text-gray-light-2 rounded
        focus:bg-black/10 focus:outline-none focus:ring-2 hover:ring-2"
    />
  );
}
