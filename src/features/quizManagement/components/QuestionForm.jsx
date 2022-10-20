import React from "react";
import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import TextArea from "@/components/form/TextArea";
import ErrorText from "@/components/form/ErrorText";
import AnswersFieldGroup from "./AnswersFieldGroup";
import Button from "@/components/ui/Button";
import { schema } from "../validations/questionFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function QuestionForm() {
  const {
    register,
    control,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4 w-full"
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
      <AnswersFieldGroup
        control={control}
        errors={errors}
        register={register}
        getValues={getValues}
      />
      <div className="flex gap-2 self-end">
        <Button variant="ButtonOutlined">Cancel</Button>
        <Button variant="ButtonContained" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
