import React, { useState } from "react";
import Button from "@/components/ui/Button";
import EditIcon from "remixicon-react/PencilLineIcon";

export default function Thumbnail({ url, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={url}
        alt="Thumbnail"
        className="rounded-md w-[320px] h-[180px] object-cover"
      />
      {isHovered && (
        <Button
          variant="flex flex-col justify-center rounded-md 
          text-white bg-black/70 w-full h-full
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={onClick}
        >
          <EditIcon className="w-8 h-8" />
          Choose photo
        </Button>
      )}
    </div>
  );
}
