import React from "react";
import Button from "@/components/Button";

export default function ActionButton({ icon, onClick }) {
  return (
    <Button
      variant="flex items-center justify-center 
        text-gray-400 hover:bg-gray-100 w-8 h-8 rounded"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}
