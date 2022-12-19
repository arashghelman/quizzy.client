import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import InputCheck from "@/components/form/InputCheck";
import React from "react";
import Button from "@/components/ui/Button";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { useFieldArray } from "react-hook-form";
import ErrorText from "@/components/form/ErrorText";
import InputText from "@/components/form/InputText";

export default function AnswersFieldGroup({
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
      <div className="grid gap-4">
        {fields.map((field, index) => (
          <InputGroup key={index}>
            <div className="flex items-center justify-between gap-2">
              <Label id={`answers[${index}].value`}>{`Answer ${
                index + 1
              }`}</Label>
              <div className="flex gap-2">
                <InputCheck
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
                <Button
                  variant="hover:opacity-70"
                  onClick={() => remove(index)}
                >
                  <FaIcons.FaTrashAlt className="text-red-500 w-4 h-4" />
                </Button>
              </div>
            </div>
            <InputText
              id={`answers[${index}].value`}
              placeholder="Type your answer here..."
              register={() => register(`answers[${index}].value`)}
            />
            {fields && errors?.answers?.[index]?.value?.message && (
              <ErrorText>{errors.answers[index].value.message}</ErrorText>
            )}
          </InputGroup>
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
      {errors?.answers?.message && (
        <ErrorText>{errors.answers.message}</ErrorText>
      )}
    </>
  );
}
