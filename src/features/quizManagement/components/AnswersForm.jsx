import React from "react";
import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/TextArea";
import ErrorText from "@/components/form/ErrorText";
import AnswersFieldArray from "./AnswersFieldArray";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  multipleChoiceAnswersSchema,
  pollAnswersSchema,
} from "../data/questionFormSchema";
import { questionType } from "@/data/questionType";

export default function AnswersForm({ isHidden, type, setData, onBack }) {
  let resolver = null;
  switch (type) {
    case questionType.MultipleChoice:
      resolver = multipleChoiceAnswersSchema;
      break;

    case questionType.Poll:
      resolver = pollAnswersSchema;
      break;

    default:
      break;
  }

  const {
    register,
    control,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all", resolver: yupResolver(resolver) });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => {
        setData((prevData) => ({
          ...prevData,
          title: data.title,
          answers: data.answers,
        }));
      })}
      className={`flex flex-col gap-4 w-full transition transform ${
        isHidden && "hidden"
      }`}
    >
      <InputGroup>
        <Label id="title">Question</Label>
        <TextArea
          id="title"
          placeholder="Type your question here..."
          isInvalid={errors.title ? true : false}
          register={() => register("title")}
        />
        {errors.title?.message && <ErrorText>{errors.title.message}</ErrorText>}
      </InputGroup>
      <AnswersFieldArray
        type={type}
        control={control}
        errors={errors}
        register={register}
        getValues={getValues}
      />
      <div className="flex justify-between">
        <Button variant="ButtonOutlined" onClick={() => onBack()}>
          Back
        </Button>
        <div className="flex gap-2">
          <Button variant="ButtonOutlined">Cancel</Button>
          <Button variant="ButtonContained" type="submit">
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}
