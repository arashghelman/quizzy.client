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

export default function SettingsPanel() {
  const [isPublic, setIsPublic] = React.useState(false);

  return (
    <div className="border-1 p-6 rounded-md">
      <form className="flex flex-col gap-6">
        <Fieldset legend="Basic Information">
          <InputGroup>
            <Label>Name</Label>
            <InputText />
          </InputGroup>
          <InputGroup>
            <Label>Subjects</Label>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map((sub) => (
                <InputSelect key={sub.id} label={sub.name} type="checkbox" />
              ))}
            </div>
          </InputGroup>
        </Fieldset>
        <hr />
        <Fieldset legend="Quiz Properties">
          <InputGroup>
            <Label>Quiz Thumbnail</Label>
            <InputFile />
          </InputGroup>
        </Fieldset>
        <hr />
        <Fieldset legend="Visibility?">
          <InputGroup>
            <Label>Visibility</Label>
            <Switch
              labels={["Draft", "Public"]}
              name="Visibility"
              isOn={isPublic}
              onChange={() => setIsPublic((prev) => !prev)}
            />
            <HelperText>
              {isPublic
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
