import React from "react";
import Button from "@/components/ui/Button";

export default function CardButton({ title, icon, onClick }) {
  return (
    <Button
      title={title}
      variant="justify-center text-gray-400 hover:bg-gray-light-3 w-8 h-8 rounded"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}
