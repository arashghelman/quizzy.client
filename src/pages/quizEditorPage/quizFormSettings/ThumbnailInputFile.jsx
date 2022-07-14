import React from "react";
import ImageIcon from "remixicon-react/ImageFillIcon";

export default function ThumbnailInputFile() {
  return (
    <label
      className="flex flex-col justify-center text-center 
        border-1 border-dashed rounded gap-4 bg-gray-light-3 h-60 cursor-pointer
        hover:opacity-70"
    >
      <input type="file" accept="image/*" className="hidden" />
      <div className="self-center bg-emerald-light-1 text-white p-4 rounded-full">
        <ImageIcon className="w-7 h-7" />
      </div>
      <span className="text-gray-light-2 text-sm">
        Drag and drop or click here to upload
      </span>
    </label>
  );
}
