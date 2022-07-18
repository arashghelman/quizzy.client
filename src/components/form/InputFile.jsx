import React from "react";
import Button from "../ui/Button";
import * as BiIcons from "react-icons/bi";

export default function InputFile() {
  const ref = React.useRef();
  return (
    <div
      className="relative overflow-hidden rounded flex flex-col justify-center items-center gap-4 py-12 bg-gray-100 InputFile
    border-1 border-gray-300 border-dashed"
    >
      <span className="text-gray-500 text-center text-sm">
        Drag and drop to upload thumbnail file or <br /> import file from your
        computer
      </span>
      <Button variant="contained" onClick={() => ref.current?.click()}>
        <BiIcons.BiImport className="w-5 h-5" />
        Import
      </Button>
      <input ref={ref} type="file" className="invisible absolute" />
    </div>
  );
}
