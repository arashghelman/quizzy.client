import React from "react";
import Button from "./Button";
import * as FiIcons from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Menu({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const ref = React.useRef();

  React.useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  });

  return (
    <div ref={ref} className="relative">
      <Button
        variant="text-gray-800 rounded-full p-2 hover:bg-gray-300"
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        <FiIcons.FiMoreVertical className="w-5 h-5" />
      </Button>
      {isOpen && (
        <ul
          className="absolute w-max right-0 mt-2 z-10 
          bg-white border-1 rounded shadow-md flex flex-col p-2"
        >
          <IconContext.Provider value={{ className: "w-4 h-4" }}>
            {children}
          </IconContext.Provider>
        </ul>
      )}
    </div>
  );
}

function Item({ onClick, children }) {
  return (
    <li className="w-full">
      <Button
        variant="MenuItem"
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        {children}
      </Button>
    </li>
  );
}

function LinkItem({ path, children }) {
  return (
    <li className="w-full">
      <Link
        to={path}
        onClick={(event) => event.stopPropagation()}
        className="MenuItem"
      >
        {children}
      </Link>
    </li>
  );
}

Menu.Item = Item;
Menu.LinkItem = LinkItem;
export default Menu;
