import React from "react";

export default function Switch({ labels, name, isOn, onChange }) {
  const [label1, label2] = labels;
  const ref = React.useRef();

  return (
    <div
      className="relative flex w-fit bg-gray-100 border-2 
    border-gray-100 rounded-full text-gray-500"
    >
      <SwitchInput
        label={label1}
        name={name}
        textColor={!isOn && "text-gray-800"}
        onChange={onChange}
      />
      <SwitchInput
        label={label2}
        name={name}
        textColor={isOn && "text-white"}
        onChange={onChange}
      />
      <span
        className={`bg-white w-[50%] h-full absolute rounded-full shadow 
        transform transition duration-300
        ${isOn && "translate-x-full bg-blue-500"}`}
      ></span>
    </div>
  );
}

function SwitchInput({ label, name, textColor, onChange }) {
  return (
    <label className={`px-5 py-2 z-10 cursor-pointer ${textColor}`}>
      {label}
      <input
        type="radio"
        id={label}
        name={name}
        className="appearance-none absolute w-full"
        onChange={onChange}
      />
    </label>
  );
}
