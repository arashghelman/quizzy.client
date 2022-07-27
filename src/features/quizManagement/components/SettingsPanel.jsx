import React from "react";
import InputGroup from "@/components/form/InputGroup";
import InputText from "@/components/form/InputText";
import Checkbox from "@/components/form/Checkbox";
import Fieldset from "@/components/form/Fieldset";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";
import { subjects } from "@/data/fakeSubjects";
import InputFile from "@/components/form/InputFile";

export default function SettingsPanel() {
  const [isPublic, setIsPublic] = React.useState(false);

  return (
    <div className="border-1 p-6 rounded-md">
      <form className="flex flex-col gap-6">
        <Fieldset legend="Basic Information">
          <InputGroup label="Name" element={<InputText />} />
          <InputGroup
            label="Subjects"
            element={
              <div className="grid grid-cols-2 gap-2">
                {subjects.map((sub) => (
                  <Checkbox key={sub.id} label={sub.name} />
                ))}
              </div>
            }
          />
        </Fieldset>
        <hr />
        <Fieldset legend="Quiz Properties">
          <InputGroup label="Quiz thumbnail" element={<InputFile />} />
        </Fieldset>
        <hr />
        <Fieldset legend="Visibility?">
          <InputGroup
            label="Visibility"
            element={
              <Switch
                labels={["Draft", "Public"]}
                name="Visibility"
                isOn={isPublic}
                onChange={() => setIsPublic((prev) => !prev)}
              />
            }
            helper={
              isPublic
                ? "The quiz will be visible to everyone."
                : "The quiz will be visible to you."
            }
          />
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
