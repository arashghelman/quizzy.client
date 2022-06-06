import React, { useState } from "react";
import Button from "@/components/Button";
import EditIcon from "remixicon-react/PencilLineIcon";

export default function QuizThumbnail({ url }) {
  const [isShowingEditButton, setIsShowingEditButton] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsShowingEditButton(true)}
      onMouseLeave={() => setIsShowingEditButton(false)}
    >
      <img
        src={url}
        alt="Thumbnail"
        className="border-1 rounded-md w-[320px] h-[180px] object-cover"
      />
      {isShowingEditButton && (
        <Button
          variant="flex flex-col justify-center rounded-md 
          text-white bg-black/70 w-full h-full
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <EditIcon />
          Choose photo
        </Button>
      )}
    </div>
  );
}
