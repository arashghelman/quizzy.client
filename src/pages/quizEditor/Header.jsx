import React from "react";
import Heading from "./header/Heading";
import Description from "./header/Description";
import Thumbnail from "./header/Thumbnail";
import Subject from "./header/Subject";
import ToolBar from "./header/ToolBar";
import Status from "./header/Status";

export default function Header({
  data: { name, status, description, thumbnailUrl },
}) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-8">
            <Heading label={name} />
            <div className="flex-1">
              <Status label={status.type} />
            </div>
          </div>
          <Description text={description} />
          <div className="flex gap-3 text-sm">
            <Subject label="🇬🇧 English" />
            <Subject label="🎉 Fun" />
            <Subject label="🌎 World Languages" />
          </div>
        </div>
        <div>
          <Thumbnail url={thumbnailUrl} />
        </div>
      </div>
      <ToolBar />
    </div>
  );
}
