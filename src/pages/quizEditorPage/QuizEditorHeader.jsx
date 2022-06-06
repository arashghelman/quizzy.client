import React from "react";
import Heading from "../../components/Heading";
import Description from "./quizEditorHeader/Description";
import Thumbnail from "./quizEditorHeader/Thumbnail";
import QuizSubject from "./quizEditorHeader/QuizSubject";
import ToolBar from "./quizEditorHeader/ToolBar";
import QuizStatus from "./quizEditorHeader/QuizStatus";
import Chapter from "./quizEditorHeader/Chapter";

export default function QuizEditorHeader({
  data: { name, status, description, thumbnailUrl },
}) {
  return (
    <div className="flex flex-col gap-extra-loose">
      <div className="flex justify-between gap-loose px-base w-full">
        <div className="flex flex-col gap-loose w-full">
          <div className="flex flex-col gap-base">
            <div className="flex items-center gap-loose">
              <Heading text={name} />
              <div>
                <QuizStatus label={status.type} />
              </div>
            </div>
            <Chapter number="1" total="2" />
          </div>
          <Description text={description} />
          <div className="flex gap-tight">
            <QuizSubject label="English" />
            <QuizSubject label="Fun" />
            <QuizSubject label="World Languages" />
          </div>
        </div>
        <div className="self-center">
          <Thumbnail url={thumbnailUrl} />
        </div>
      </div>
      <ToolBar />
    </div>
  );
}