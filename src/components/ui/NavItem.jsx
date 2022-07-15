import React from "react";
import NavLink from "./NavLink";
import * as MdIcons from "react-icons/md";

export default function NavItem({ item }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <li>
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <NavLink>
          <div className="flex items-center gap-3 font-semibold">
            {item.icon}
            {item.title}
          </div>
          {item.subNav && (
            <MdIcons.MdOutlineKeyboardArrowRight
              className={`transition duration-150 transform ${
                isOpen && "rotate-90"
              }`}
            />
          )}
        </NavLink>
      </div>
      {item.subNav && (
        <ul className={isOpen ? "visible" : "invisible"}>
          {item.subNav.map((sub, index) => (
            <li key={index}>
              <NavLink isSub>
                <div className="mx-7">{sub.title}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
