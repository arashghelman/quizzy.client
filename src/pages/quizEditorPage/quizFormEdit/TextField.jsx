import React from "react";
import "./textField/TextField.css";

export default function TextField({ label, type = "text" }) {
  const styles =
    "w-full bg-transparent text-gray-base mt-5 resize-none focus:outline-none peer TextField";

  const inputType = {
    text: <input type="text" placeholder=" " className={styles} />,
    textarea: <textarea placeholder=" " className={styles} />,
  };

  return (
    <label className="flex flex-col border-1 rounded relative bg-white text-gray-light-2 px-[10px] h-[48px]">
      {inputType[type]}
      <span
        className="absolute h-[48px] leading-[48px] pointer-events-none overflow-hidden transform origin-left
        transition-all peer-focus:-translate-y-[0.7rem] peer-focus:scale-75 Label"
      >
        {label}
      </span>
      <span className="text-xs self-end absolute bottom-[2px]">0/0</span>
    </label>
  );
}
