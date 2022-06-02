import React from "react";
import Button from "@/components/Button";

export default function CardButton({ icon, onClick }) {
  return (
    <Button
      variant="justify-center text-gray-400 hover:bg-gray-light-3 w-8 h-8 rounded"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}
