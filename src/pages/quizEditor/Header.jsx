import React from "react";
import Heading from "./header/Heading";
import Description from "./header/Description";
import Thumbnail from "./header/Thumbnail";
import Subject from "./header/Subject";
import ToolBar from "./header/ToolBar";
import Status from "./header/Status";
import Chapter from "./header/Chapter";

export default function Header({
  data: { name, status, description, thumbnailUrl },
}) {
  return (
    <div className="flex flex-col gap-extra-loose">
      <div className="flex justify-between gap-loose px-base">
        <div className="flex flex-col gap-loose w-full">
          <div className="flex flex-col gap-base">
            <div className="flex items-center gap-loose">
              <Heading text={name} />
              <div>
                <Status label={status.type} />
              </div>
            </div>
            <Chapter number="1" total="2" />
          </div>
          <Description text={description} />
          <div className="flex gap-tight">
            <Subject label="🇬🇧 English" />
            <Subject label="🎉 Fun" />
            <Subject label="🌎 World Languages" />
          </div>
        </div>
        <Thumbnail url={thumbnailUrl} />
      </div>
      <ToolBar />
    </div>
  );
}
