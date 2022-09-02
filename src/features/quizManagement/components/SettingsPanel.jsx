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
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { quizzes } from "@/data/fakeQuizzes";
import { schema } from "../data/quizFormSchema";
import ErrorText from "@/components/form/ErrorText";
import { quizStatus } from "@/data/quizStatus";
import * as messages from "../messages/quizFormMessages";
import * as FaIcons from "react-icons/fa";

export default function SettingsPanel() {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const { id } = useParams();
  const quiz = quizzes.find((quiz) => quiz.id === id);

  React.useEffect(
    () => setValue("isPublic", quiz.status === quizStatus.PUBLIC.type),
    [quiz.status, setValue]
  );

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
              defaultValue={quiz.name}
              isInvalid={errors.name ? true : false}
              register={() => register("name")}
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
                  defaultChecked={
                    quiz.subjects.find((subj) => subj.id === sub.id)
                      ? true
                      : false
                  }
                  register={() => register("subjects")}
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
            {quiz.thumbnail ? (
              <div className="flex relative justify-center border-1 overflow-hidden h-48 rounded border-gray-300">
                <div className="absolute right-2 top-2">
                  <Button variant="bg-red-100 p-2 rounded hover:opacity-70">
                    <FaIcons.FaTrashAlt className="text-red-500" />
                  </Button>
                </div>
                <img src={quiz.thumbnail} alt="thumbnail" />
              </div>
            ) : (
              <InputFile id="thumbnail" />
            )}
          </InputGroup>
          <InputGroup>
            <Label>Status</Label>
            <div className="flex items-center gap-4">
              <Switch register={() => register("isPublic")} />
              <span className="text-gray-800">
                {watch("isPublic")
                  ? quizStatus.PUBLIC.name
                  : quizStatus.DRAFT.name}
              </span>
            </div>
            <HelperText>
              {watch("isPublic")
                ? messages.STATUS_PUBLIC_HELPER_MESSAGE
                : messages.STATUS_DRAFT_HELPER_MESSAGE}
            </HelperText>
          </InputGroup>
        </Fieldset>
        <div className="self-center">
          <Button type="submit" variant="ButtonContained">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
