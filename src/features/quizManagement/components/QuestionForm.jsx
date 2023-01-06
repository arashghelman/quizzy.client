import React from "react";
// import InputGroup from "@/components/form/InputGroup";
// import ErrorText from "@/components/form/ErrorText";
import Button from "@/components/ui/Button";
// import { schema } from "../validations/questionFormSchema";
import { useForm, useFieldArray } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { EditorState } from "draft-js";
import TextEditor from "@/components/form/TextEditor";
import AnswerInputGroup from "./AnswerInputGroup";
import * as RiIcons from "react-icons/ri";

export default function QuestionForm() {
  const {
    register,
    control,
    getValues,
    setValue,
    // formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      content: EditorState.createEmpty(),
      answers: [
        { value: "", isTrue: false },
        { value: "", isTrue: false },
      ],
    },
    mode: "onBlur",
    // resolver: yupResolver(schema),
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "answers",
  });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4 w-full"
    >
      <TextEditor
        name="content"
        control={control}
        setValue={setValue}
        placeholder="Type your question here"
      />
      <div className="grid gap-4">
        {fields.map((field, index) => (
          <AnswerInputGroup
            key={index}
            index={index}
            value={field.value}
            isRemoveDisabled={fields.length === 2}
            register={register}
            onRemoveClick={() => remove(index)}
            onIsTrueChange={() =>
              getValues("answers").forEach((answer, i) =>
                update(i, {
                  ...answer,
                  isCorrect: i === index ? true : false,
                })
              )
            }
          />
        ))}
      </div>
      {fields.length < 5 && (
        <div className="self-center w-full">
          <Button
            variant="w-full flex justify-center p-4 mt-2 border-1 border-dashed border-gray-300 hover:border-gray-500 text-gray-400 rounded group"
            onClick={() => append({ value: "", isCorrect: false })}
          >
            <RiIcons.RiAddFill className="w-5 h-5 group-hover:text-gray-500" />
          </Button>
        </div>
      )}
      <div className="flex gap-2 self-end">
        <Button variant="ButtonOutlined">Cancel</Button>
        <Button variant="ButtonContained" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
