import React from "react";
import Button from "@/components/Button";

export default function CollapseAllButton({ label, onClick }) {
  return (
    <Button variant="text-sky-base hover:text-sky-base/70" onClick={onClick}>
      {label}
    </Button>
  );
}
