import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
// import InputText from "@/components/form/InputText";
import InputSelect from "@/components/form/InputSelect";
import React from "react";
import Button from "@/components/ui/Button";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { useFieldArray } from "react-hook-form";
import ErrorText from "@/components/form/ErrorText";
import { questionType } from "@/data/questionType";
import TextArea from "@/components/form/TextArea";

export default function AnswersFieldArray({
  type,
  control,
  register,
  errors,
  getValues,
}) {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "answers",
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <InputGroup key={index}>
            <div className="flex items-center justify-between">
              <Label id={`answers.${index}.value`}>{`Answer ${
                index + 1
              }`}</Label>
              <div className="flex items-center gap-2">
                {type === questionType.MultipleChoice && (
                  <InputSelect
                    type="radio"
                    name="answers"
                    value={field.value}
                    onChange={() =>
                      getValues("answers").forEach((answer, i) =>
                        update(i, {
                          ...answer,
                          isCorrect: i === index ? true : false,
                        })
                      )
                    }
                  />
                )}
                <Button
                  variant="hover:opacity-70"
                  onClick={() => remove(index)}
                >
                  <FaIcons.FaTrashAlt className="text-red-500 w-4 h-4" />
                </Button>
              </div>
            </div>
            <TextArea
              id={`answers[${index}].value`}
              placeholder="Type an answer here..."
              isInvalid={errors.title ? true : false}
              register={() => register(`answers.${index}.value`)}
            />
            {fields && errors?.answers?.[index]?.value?.message && (
              <ErrorText>{errors.answers[index].value.message}</ErrorText>
            )}
          </InputGroup>
        ))}
      </div>
      {fields.length < 5 && (
        <div className="self-center">
          <Button
            variant="ButtonContained"
            onClick={() => append({ value: "", isCorrect: false })}
          >
            <RiIcons.RiAddFill />
            <span className="mr-1">Add Answer</span>
          </Button>
        </div>
      )}
      {errors?.answers?.message && (
        <ErrorText>{errors.answers.message}</ErrorText>
      )}
    </>
  );
}
