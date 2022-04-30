import React from "react";
import Button from "@/components/Button";
import CollapseIcon from "remixicon-react/ArrowUpSLineIcon";
import ExpandIcon from "remixicon-react/ArrowDownSLineIcon";

export default function CollapseButton({ isCollapsed, onCollapse }) {
  return (
    <Button
      variant="w-full flex justify-center py-1 text-gray-400 hover:bg-gray-100"
      onClick={onCollapse}
    >
      {isCollapsed ? (
        <ExpandIcon className="w-base" />
      ) : (
        <CollapseIcon className="w-base" />
      )}
    </Button>
  );
}
