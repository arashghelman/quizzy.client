import React from "react";

export default function Switch({ defaultChecked, register }) {
  return (
    <label className="inline-block cursor-pointer w-fit">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        {...register()}
        className="peer hidden"
      />
      <div
        className="relative w-[56px] h-8 rounded-full bg-gray-100 duration-300 
        after:content-[''] after:top-[4px] after:left-[4px] after:absolute
        after:w-6 after:h-6 after:rounded-full after:bg-white after:shadow-md
        after:duration-300 peer-checked:bg-blue-500
        peer-checked:after:left-[calc(100%-4px)]
        transform peer-checked:after:-translate-x-full"
      ></div>
    </label>
  );
}
