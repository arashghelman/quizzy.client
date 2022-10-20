import React from "react";
import InputGroup from "@/components/form/InputGroup";
import InputText from "@/components/form/InputText";
import Button from "@/components/ui/Button";
import { subjects } from "@/data/fakeSubjects";
import InputSelect from "@/components/form/InputSelect";
import Label from "@/components/form/Label";
import HelperText from "@/components/form/HelperText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/quizFormSchema";
import * as messages from "../messages/quizFormMessages";
import ErrorText from "@/components/form/ErrorText";

export default function QuizForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4"
    >
      <InputGroup>
        <Label id="name">Name</Label>
        <InputText
          id="name"
          placeholder="Enter a quiz name"
          isInvalid={errors.name ? true : false}
          register={() => register("name")}
        />
        {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}
        <HelperText>{messages.NAME_HELPER_MESSAGE}</HelperText>
      </InputGroup>
      <InputGroup>
        <Label>Subjects</Label>
        <div className="grid grid-cols-3 gap-2">
          {subjects.map((sub) => (
            <InputSelect
              key={sub.id}
              label={sub.name}
              value={sub.id}
              type="checkbox"
              register={() => register("subjects")}
            />
          ))}
        </div>
        {errors.subjects?.message && (
          <ErrorText>{errors.subjects?.message}</ErrorText>
        )}
        <HelperText>{messages.SUBJECTS_HELPER_MESSAGE}</HelperText>
      </InputGroup>
      <div className="flex self-end gap-2">
        <Button variant="ButtonOutlined">Cancel</Button>
        <Button variant="ButtonContained" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
