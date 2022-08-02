import React from "react";
import InputGroup from "@/components/form/InputGroup";
import InputText from "@/components/form/InputText";
import Button from "@/components/ui/Button";
import { subjects } from "@/data/fakeSubjects";
import InputSelect from "@/components/form/InputSelect";
import Label from "@/components/form/Label";
import HelperText from "@/components/form/HelperText";

export default function NewQuizForm() {
  return (
    <form className="flex flex-col gap-4 w-[550px]" method="dialog">
      <InputGroup>
        <Label>Name</Label>
        <InputText />
        <HelperText>A friendly name for the quiz.</HelperText>
      </InputGroup>
      <InputGroup>
        <Label>Subjects</Label>
        <div className="grid grid-cols-3 gap-2">
          {subjects.map((sub) => (
            <InputSelect key={sub.id} label={sub.name} type="checkbox" />
          ))}
        </div>
        <HelperText>
          Choose relevant subjects for better content suggestion.
        </HelperText>
      </InputGroup>
      <div className="flex self-end gap-2">
        <Button>Cancel</Button>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
