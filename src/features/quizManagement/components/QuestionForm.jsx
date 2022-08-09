import React from "react";
import TypeInputRadio from "./TypeInputRadio";
import InputGroup from "@/components/form/InputGroup";
import Button from "@/components/ui/Button";
import TextArea from "@/components/form/TextArea";
import Label from "@/components/form/Label";
import HelperText from "@/components/form/HelperText";
import { types } from "../data/typeInputsData";
import { useForm } from "react-hook-form";
import { schema } from "../data/questionFormSchema";
import ErrorText from "@/components/form/ErrorText";
import AnswersFieldArray from "./AnswersFieldArray";

export default function QuestionForm() {
  const [isNext, setIsNext] = React.useState(false);

  const {
    register,
    control,
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4 w-[550px]"
    >
      {isNext ? (
        <>
          <InputGroup>
            <Label id="title">Question</Label>
            <TextArea
              id="title"
              placeholder="Type your question here..."
              isInvalid={errors.title ? true : false}
              register={() => register("title", schema["title"])}
            />
            {errors.title?.message && (
              <ErrorText>{errors.title?.message}</ErrorText>
            )}
          </InputGroup>
          <AnswersFieldArray
            control={control}
            errors={errors}
            register={register}
            getValues={getValues}
          />
        </>
      ) : (
        <InputGroup>
          <Label>Question type</Label>
          <div className="grid grid-cols-4 auto-rows-fr gap-4">
            {types.map((type) => (
              <TypeInputRadio
                key={type.value}
                type={type}
                register={() => register("type", schema["type"])}
              />
            ))}
          </div>
          {errors.type?.message && (
            <ErrorText>{errors.type?.message}</ErrorText>
          )}
          <HelperText>
            Choose an appropriate question type from a variety of types.
          </HelperText>
        </InputGroup>
      )}
      <div
        className={`flex items-center ${
          isNext ? "justify-between" : "justify-end"
        }`}
      >
        {isNext && <Button onClick={() => setIsNext(false)}>Back</Button>}
        <div className="flex items-center gap-2">
          <Button>Cancel</Button>
          {isNext ? (
            <Button variant="contained" type="submit">
              Create
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={!watch("type") ? true : false}
              onClick={() => setIsNext(true)}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
