import React from "react";
import CollapseIcon from "remixicon-react/ArrowUpSLineIcon";
import ExpandIcon from "remixicon-react/ArrowDownSLineIcon";
import Button from "@/components/Button";

export default function CollapseButton({ isCollapsed, onClick }) {
  return (
    <Button
      variant="w-full flex justify-center py-1 text-gray-400 hover:bg-gray-100"
      onClick={onClick}
    >
      {isCollapsed ? (
        <ExpandIcon className="w-base" />
      ) : (
        <CollapseIcon className="w-base" />
      )}
    </Button>
  );
}
