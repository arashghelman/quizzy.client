import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import * as MdIcons from "react-icons/md";
import { useLocation } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <nav
      className="h-screen w-[265px] p-4
        border-r-1 bg-white"
    >
      <ul>{children}</ul>
    </nav>
  );
}

function Item({ data: { title, icon, path, subItems } }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { pathname } = useLocation();

  return (
    <li className="text-gray-800">
      {subItems ? (
        <>
          <Button
            variant={`NavItem justify-between ${
              subItems.some((subItem) => pathname.match(subItem.path)) &&
              "text-blue-500"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              {icon}
              {title}
            </div>
            <MdIcons.MdOutlineKeyboardArrowRight
              className={`w-4 h-4 transition duration-150 transform ${
                isOpen && "rotate-90"
              }`}
            />
          </Button>
          <ul className={isOpen ? "visible" : "invisible"}>
            {subItems.map((subItem, index) => (
              <li key={index}>
                <ItemNavLink isSubItem path={subItem.path}>
                  <div className="mx-6">{subItem.title}</div>
                </ItemNavLink>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ItemNavLink path={path}>
          {icon}
          {title}
        </ItemNavLink>
      )}
    </li>
  );
}

function ItemNavLink({ path, isSubItem, children }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `NavItem ${isSubItem && "font-normal"} ${
          isActive ? "text-blue-500" : "text-gray-800"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

Sidebar.Item = Item;
export default Sidebar;
