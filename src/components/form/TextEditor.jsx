import React from "react";
import * as TbIcons from "react-icons/tb";
import Button from "../ui/Button";

export default function TextEditor() {
  return (
    <div className="border-gray-300 border-1 rounded">
      <div className="flex items-center gap-4 px-4 py-2 border-b-1 border-gray-300">
        <Button>
          <TbIcons.TbPhoto className="w-6 h-6 text-gray-800 hover:text-gray-800/70" />
        </Button>
        <Button>
          <TbIcons.TbMath className="w-6 h-6 text-gray-800 hover:text-gray-800/70" />
        </Button>
        <Button>
          <TbIcons.TbSpace className="w-6 h-6 text-gray-800 hover:text-gray-800/70" />
        </Button>
      </div>
      <div
        contentEditable
        className="px-4 py-2 flex text-gray-800 focus:outline-none"
      ></div>
    </div>
  );
}
