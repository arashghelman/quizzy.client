import React from "react";
import QuizForm from "./QuizForm";
import TextField from "./quizFormEdit/TextField";
import SubjectCheckbox from "./quizFormEdit/SubjectCheckbox";
import Button from "@/components/Button";
import { subjects } from "@/utils/fakeData";

export default function QuizFormEdit({ onClickCancel }) {
  return (
    <QuizForm onClickCancel={onClickCancel}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-3">
          <TextField label="Name this quiz" type="text" />
          <TextField label="Write a brief description" type="textarea" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-gray-light-1">Choose relevant subjects</span>
          <div className="flex gap-x-2 gap-y-4 flex-wrap">
            {subjects.map((sub) => (
              <SubjectCheckbox key={sub.subjectId} label={sub.name} />
            ))}
            <Button variant="px-4 text-emerald-base hover:text-emerald-base/70 font-semibold">
              more...
            </Button>
          </div>
        </div>
      </div>
    </QuizForm>
  );
}
