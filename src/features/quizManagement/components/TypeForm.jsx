import InputGroup from "@/components/form/InputGroup";
import Label from "@/components/form/Label";
import TypeInputRadio from "./TypeInputRadio";
import HelperText from "@/components/form/HelperText";
import ErrorText from "@/components/form/ErrorText";
import Button from "@/components/ui/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { types } from "../data/typeInputsData";
import { yupResolver } from "@hookform/resolvers/yup";
import { typeSchema } from "../validations/questionFormSchema";

export default function TypeForm({ isHidden, setData, onNext }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur", resolver: yupResolver(typeSchema) });

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit((data) => {
        setData((prevData) => ({ ...prevData, type: data.type }));
        onNext();
      })}
      className={`flex flex-col gap-4 w-full transition transform ${
        isHidden && "hidden"
      }`}
    >
      <InputGroup>
        <Label>Question type</Label>
        <div className="grid grid-cols-4 auto-rows-fr gap-4">
          {types.map((type) => (
            <TypeInputRadio
              key={type.value}
              type={type}
              register={() => register("type")}
            />
          ))}
        </div>
        {errors.type?.message && <ErrorText>{errors.type.message}</ErrorText>}
        <HelperText>
          Choose an appropriate question type from a variety of types.
        </HelperText>
      </InputGroup>
      <div className="flex gap-2 self-end">
        <Button variant="ButtonOutlined">Cancel</Button>
        <Button variant="ButtonContained" type="submit">
          Next
        </Button>
      </div>
    </form>
  );
}
