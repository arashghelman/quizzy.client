import React from "react";

export default function TitleTextArea({ placeholder }) {
  return (
    <div className="relative h-full">
      <textarea
        placeholder={placeholder}
        className="bg-transparent w-full h-full text-2xl py-20 px-4 text-center resize-none 
        text-gray-base placeholder:text-gray-light-2 rounded
        focus:bg-black/10 focus:outline-none focus:ring-2 hover:ring-2"
      />
      <span className="text-gray-light-2 absolute bottom-[4px] right-[3px] text-lg">
        0/0
      </span>
    </div>
  );
}
