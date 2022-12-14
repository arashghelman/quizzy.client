import React from "react";
import Button from "./Button";
import { menuItemType } from "../data/menuItemType";
import { Link } from "react-router-dom";

export default function MenuItem({ type, onClick, path, children }) {
  const button = (
    <Button
      variant="MenuItem"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {children}
    </Button>
  );

  return (
    <li className="w-full">
      {(() => {
        switch (type) {
          case menuItemType.BUTTON:
            return button;

          case menuItemType.LINK:
            return (
              <Link
                to={path}
                onClick={(event) => event.stopPropagation()}
                className="MenuItem"
              >
                {children}
              </Link>
            );

          default:
            return button;
        }
      })()}
    </li>
  );
}
