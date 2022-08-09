import React from "react";
import InputGroup from "@/components/form/InputGroup";
import InputText from "@/components/form/InputText";
import Fieldset from "@/components/form/Fieldset";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";
import { subjects } from "@/data/fakeSubjects";
import InputFile from "@/components/form/InputFile";
import InputSelect from "@/components/form/InputSelect";
import Label from "@/components/form/Label";
import HelperText from "@/components/form/HelperText";
import { useForm } from "react-hook-form";
import { schema } from "../data/quizFormSchema";
import ErrorText from "@/components/form/ErrorText";

export default function SettingsPanel() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  return (
    <div className="border-1 p-6 rounded-md">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-6"
      >
        <Fieldset legend="Basic Information">
          <InputGroup>
            <Label id="name">Name</Label>
            <InputText
              id="name"
              placeholder="Enter a quiz name"
              isInvalid={errors.name ? true : false}
              register={() => register("name", schema["name"])}
            />
            {errors.name?.message && (
              <ErrorText>{errors.name.message}</ErrorText>
            )}
          </InputGroup>
          <InputGroup>
            <Label>Subjects</Label>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map((sub) => (
                <InputSelect
                  key={sub.id}
                  label={sub.name}
                  value={sub.id}
                  type="checkbox"
                  register={() => register("subjects", schema["subjects"])}
                />
              ))}
            </div>
            {errors.subjects?.message && (
              <ErrorText>{errors.subjects.message}</ErrorText>
            )}
          </InputGroup>
        </Fieldset>
        <hr />
        <Fieldset legend="Quiz Properties">
          <InputGroup>
            <Label>Quiz Thumbnail</Label>
            <InputFile />
          </InputGroup>
          <InputGroup>
            <Label>Status</Label>
            <div className="flex items-center gap-4">
              <Switch register={() => register("isPublic")} />
              <span className="text-gray-800">
                {watch("isPublic") ? "Public" : "Draft"}
              </span>
            </div>
            <HelperText>
              {watch("isPublic")
                ? "The quiz will be visible to everyone."
                : "The quiz will be visible to you."}
            </HelperText>
          </InputGroup>
        </Fieldset>
        <div className="self-center">
          <Button type="submit" variant="contained">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
