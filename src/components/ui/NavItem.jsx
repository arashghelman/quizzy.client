import React from "react";
import NavLinkWrapper from "./NavLinkWrapper";
import Button from "./Button";
import * as MdIcons from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function NavItem({ data }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { pathname } = useLocation();

  return (
    <li className="text-gray-800">
      {data.subNav ? (
        <>
          <Button
            variant={`NavItem justify-between ${
              data.subNav?.some((sub) => pathname.match(sub.path)) &&
              "text-blue-500"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              {data.icon}
              {data.title}
            </div>
            <MdIcons.MdOutlineKeyboardArrowRight
              className={`w-4 h-4 transition duration-150 transform ${
                isOpen && "rotate-90"
              }`}
            />
          </Button>
          <ul className={isOpen ? "visible" : "invisible"}>
            {data.subNav.map((sub, index) => (
              <li key={index}>
                <NavLinkWrapper isSub path={sub.path}>
                  <div className="mx-6">{sub.title}</div>
                </NavLinkWrapper>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <NavLinkWrapper path={data.path}>
          {data.icon}
          {data.title}
        </NavLinkWrapper>
      )}
    </li>
  );
}
