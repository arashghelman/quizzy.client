import React from "react";
import ActionsIcon from "remixicon-react/MoreFillIcon";
import ActionsMenu from "./ActionsMenu";
import { items } from "@/features/dashboard/data/actionsMenuData";
import Thumbnail from "@/components/ui/Thumbnail";
import Button from "@/components/ui/Button";

export default function QuizCard() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const handler = (event) => {
      if (isMenuOpen && ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  });

  return (
    <div className="relative flex justify-between items-center cursor-pointer hover:bg-gray-100 border-b-1 p-4">
      <div className="flex gap-4">
        <Thumbnail url="https://corridorchapter.nl/wp-content/uploads/2020/05/quiz.jpg" />
        <div className="flex flex-col gap-1">
          <a className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
            English Test
          </a>
          <span className="text-gray-500 text-sm">Public</span>
        </div>
      </div>
      <span className="text-gray-500 text-sm">Created 2 days ago</span>
      <div className="relative">
        <Button
          variant="actions"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <ActionsIcon className="w-4" />
        </Button>
        {isMenuOpen && <ActionsMenu ref={ref} items={items} />}
      </div>
    </div>
  );
}
