import React from "react";
import TypeInputRadio from "./TypeInputRadio";
import { types } from "../data/typeInputData";
import InputGroup from "@/components/form/InputGroup";
import Button from "@/components/ui/Button";
import TextArea from "@/components/form/TextArea";
import Label from "@/components/form/Label";
import HelperText from "@/components/form/HelperText";
import AnswerInputGroup from "./AnswerInputGroup";
import * as RiIcons from "react-icons/ri";

export default function NewQuestionForm() {
  const [isNext, setIsNext] = React.useState(false);
  return (
    <form className="flex flex-col gap-4 w-[550px]" method="dialog">
      {isNext ? (
        <>
          <InputGroup>
            <Label>Title</Label>
            <TextArea placeholder="Type your question here..." />
          </InputGroup>
          <AnswerInputGroup label="Answer 1" />
          <AnswerInputGroup label="Answer 2" />
          <AnswerInputGroup label="Answer 3" />
          <AnswerInputGroup label="Answer 4" />
          <div className="self-center">
            <Button variant="contained">
              <RiIcons.RiAddFill />
              Add Answer
            </Button>
          </div>
        </>
      ) : (
        <>
          <InputGroup>
            <Label>Types</Label>
            <HelperText>
              Choose an appropriate question type from a variety of types.
            </HelperText>
            <div className="grid grid-cols-4 auto-rows-fr gap-4">
              {types.map((type) => (
                <TypeInputRadio key={type.label} data={type} />
              ))}
            </div>
          </InputGroup>
        </>
      )}
      <div className="flex gap-2 self-end">
        <Button>Cancel</Button>
        <Button variant="contained" onClick={() => setIsNext(true)}>
          {isNext ? "Create" : "Next"}
        </Button>
      </div>
    </form>
  );
}
