import React from "react";
import { useCollapseAll } from "@/context/collapseContext";
import Button from "@/components/Button";

export default function CollapseAllButton() {
  const [isAllCollapsed, collapseAll] = useCollapseAll();
  return (
    <Button
      variant="text-sky-500 hover:opacity-70"
      onClick={() => collapseAll(!isAllCollapsed)}
    >
      {isAllCollapsed ? "Expand All" : "Collapse All"}
    </Button>
  );
}
