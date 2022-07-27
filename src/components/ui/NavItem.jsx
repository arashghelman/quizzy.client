import React from "react";
import NavLinkWrapper from "./NavLinkWrapper";
import Button from "./Button";
import * as MdIcons from "react-icons/md";

export default function NavItem({ item }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <li className="text-gray-800">
      {item.subNav ? (
        <>
          <Button
            variant="nav-button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </div>
            <MdIcons.MdOutlineKeyboardArrowRight
              className={`w-4 h-4 transition duration-150 transform ${
                isOpen && "rotate-90"
              }`}
            />
          </Button>
          <ul className={isOpen ? "visible" : "invisible"}>
            {item.subNav.map((sub, index) => (
              <li key={index}>
                <NavLinkWrapper isSub path={sub.path}>
                  <div className="mx-6">{sub.title}</div>
                </NavLinkWrapper>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <NavLinkWrapper path={item.path}>
          {item.icon}
          {item.title}
        </NavLinkWrapper>
      )}
    </li>
  );
}
