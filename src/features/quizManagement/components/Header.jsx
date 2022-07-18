import React from "react";
import Heading from "@/components/ui/Heading";
import Thumbnail from "@/components/ui/Thumbnail";

export default function Header() {
  return (
    <div className="flex items-center gap-6">
      <Thumbnail
        size="md"
        url="https://corridorchapter.nl/wp-content/uploads/2020/05/quiz.jpg"
      />
      <div className="flex flex-col gap-2">
        <Heading>English Test</Heading>
        <span className="text-gray-500">Public</span>
      </div>
    </div>
  );
}
