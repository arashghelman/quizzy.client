import React, { useState } from "react";
import ArrowDownIcon from "remixicon-react/ArrowDownSFillIcon";
import MenuItem from "./dropdownMenu/MenuItem";

export default function DropdownMenu({ items, onSelectItem, size = "base" }) {
  const sizeConfig = {
    base: "py-4",
    sm: "py-2",
  };

  const [isOpen, setIsOpen] = useState(false);

  const selectedItem = items.find((itm) => itm.isSelected).content;

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleClickItem(id) {
    onSelectItem(id);
    toggleIsOpen();
  }

  return (
    <div className="relative z-20 w-full flex flex-col select-none">
      <div
        onClick={toggleIsOpen}
        className={`flex items-center justify-between px-4 ${sizeConfig[size]}
        text-gray-base font-semibold border-1 rounded bg-white cursor-pointer`}
      >
        {selectedItem}
        <ArrowDownIcon
          className={`w-5 text-gray-base transition-transform duration-300 ${
            isOpen && "transform -rotate-180"
          }`}
        />
      </div>
      {isOpen && (
        <ul
          className="flex flex-col overflow-hidden bg-white shadow 
          border-1 rounded absolute w-full top-full mt-2"
        >
          {items.map((itm) => (
            <MenuItem
              key={itm.id}
              isSelected={itm.isSelected}
              onClick={() => handleClickItem(itm.id)}
              size={sizeConfig[size]}
            >
              {itm.content}
            </MenuItem>
          ))}
        </ul>
      )}
    </div>
  );
}
