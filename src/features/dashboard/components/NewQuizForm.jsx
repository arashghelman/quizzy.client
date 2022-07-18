import React from "react";
import InputGroup from "@/components/form/InputGroup";
import InputText from "@/components/form/InputText";
import Checkbox from "@/components/form/Checkbox";
import Button from "@/components/ui/Button";
import { subjects } from "@/data/fakeSubjects";

export default function NewQuizForm() {
  return (
    <form className="flex flex-col gap-6 w-[550px]" method="dialog">
      <InputGroup
        label="Name"
        element={<InputText />}
        helper="A friendly name for the quiz."
      />
      <InputGroup
        label="Subjects"
        element={
          <div className="grid grid-cols-3 gap-4">
            {subjects.map((sub) => (
              <Checkbox key={sub.id} label={sub.name} />
            ))}
          </div>
        }
        helper="Choose relevant subjects for better content suggestion."
      />
      <div className="flex self-end gap-2">
        <Button>Cancel</Button>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
