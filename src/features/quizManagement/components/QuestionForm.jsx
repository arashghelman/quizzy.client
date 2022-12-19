import React from "react";
import InputGroup from "@/components/form/InputGroup";
// import ErrorText from "@/components/form/ErrorText";
import AnswersFieldGroup from "./AnswersFieldGroup";
import Button from "@/components/ui/Button";
// import { schema } from "../validations/questionFormSchema";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { EditorState } from "draft-js";
import TextEditor from "@/components/form/TextEditor";

export default function QuestionForm() {
  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
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

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4 w-full"
    >
      <InputGroup>
        <TextEditor
          name="content"
          control={control}
          setValue={setValue}
          placeholder="Type your question here"
        />
      </InputGroup>
      <AnswersFieldGroup
        control={control}
        register={register}
        errors={errors}
        getValues={getValues}
        setValue={setValue}
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
