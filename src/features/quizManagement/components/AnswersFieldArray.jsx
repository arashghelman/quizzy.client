import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import InputText from "@/components/form/InputText";
import InputSelect from "@/components/form/InputSelect";
import React from "react";
import Button from "@/components/ui/Button";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import { useFieldArray } from "react-hook-form";

export default function AnswersFieldArray({ control, register, getValues }) {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "answers",
  });

  return (
    <>
      {fields.map((field, index) => (
        <InputGroup key={index}>
          <div className="flex items-center justify-between">
            <Label id={`answers[${index}].value`}>{`Answer ${
              index + 1
            }`}</Label>
            <div className="flex items-center gap-2">
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
              <Button variant="basic" onClick={() => remove(index)}>
                <HiIcons.HiTrash className="text-red-500 w-5 h-5" />
              </Button>
            </div>
          </div>
          <InputText
            id={`answers[${index}].value`}
            placeholder="Type an answer here..."
            register={() => register(`answers[${index}].value`)}
          />
        </InputGroup>
      ))}
      {fields.length < 5 && (
        <div className="self-center">
          <Button
            variant="contained"
            onClick={() => append({ value: "", isCorrect: false })}
          >
            <RiIcons.RiAddFill />
            Add Answer
          </Button>
        </div>
      )}
    </>
  );
}
