import React from "react";
import Button from "./Button";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";

export default function ActionsMenu({ children }) {
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
      <Button variant="actions" onClick={() => setIsOpen((prev) => !prev)}>
        <RiIcons.RiMoreFill className="w-4 h-4" />
      </Button>
      {isOpen && (
        <ul
          className="absolute w-max right-0 mt-1 z-10 
          bg-white border-1 rounded shadow-md flex flex-col p-2"
        >
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            {children}
          </IconContext.Provider>
        </ul>
      )}
    </div>
  );
}
