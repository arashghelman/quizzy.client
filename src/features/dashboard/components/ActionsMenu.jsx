import React from "react";

const ActionsMenu = React.forwardRef(({ items }, ref) => {
  return (
    <ul
      ref={ref}
      className="absolute right-0 mt-1 z-10 bg-white border-1 rounded shadow-md flex flex-col p-2"
    >
      {items.map((item, index) => (
        <li key={index} className="text-sm w-[150px]">
          <a
            href="#"
            className="block text-gray-500 hover:text-gray-800 hover:bg-gray-100/70 rounded px-2 py-1 focus:ring-2"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
});

export default ActionsMenu;
