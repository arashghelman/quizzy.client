import React from "react";
import InputGroup from "@/components/form/InputGroup";
import InputText from "@/components/form/InputText";
import Button from "@/components/ui/Button";
import { subjects } from "@/data/fakeSubjects";
import InputSelect from "@/components/form/InputSelect";
import Label from "@/components/form/Label";
import HelperText from "@/components/form/HelperText";
import { useForm } from "react-hook-form";
import { schema } from "../data/quizFormSchema";
import ErrorText from "@/components/form/ErrorText";

export default function QuizForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-4 w-[550px]"
    >
      <InputGroup>
        <Label id="name">Name</Label>
        <InputText
          id="name"
          placeholder="Enter a quiz name"
          register={() => register("name", schema["name"])}
        />
        {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}
        <HelperText>A friendly name for the quiz.</HelperText>
      </InputGroup>
      <InputGroup>
        <Label>Subjects</Label>
        <div className="grid grid-cols-3 gap-2">
          {subjects.map((sub) => (
            <InputSelect
              key={sub.id}
              label={sub.name}
              id="subjects"
              value={sub.id}
              type="checkbox"
              register={() => register("subjects", schema["subjects"])}
            />
          ))}
        </div>
        {errors.subjects?.message && (
          <ErrorText>{errors.subjects?.message}</ErrorText>
        )}
        <HelperText>
          Choose relevant subjects for better content suggestion.
        </HelperText>
      </InputGroup>
      <div className="flex self-end gap-2">
        <Button>Cancel</Button>
        <Button variant="contained" type="submit" disabled={!isValid}>
          Create
        </Button>
      </div>
    </form>
  );
}
