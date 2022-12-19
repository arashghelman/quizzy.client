import React from "react";
import Button from "../ui/Button";
import { Editor, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { tools } from "../data/textEditor";
import { Controller, useWatch } from "react-hook-form";

export default function TextEditor({ name, control, setValue, placeholder }) {
  const editorState = useWatch({ control, name: name });

  return (
    <div className="border-1 border-gray-300 rounded w-full">
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Editor
            editorState={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      />
      <div className="border-t-1 border-gray-300 p-2 flex gap-2">
        {tools.map((t) => (
          <Button
            key={t.name}
            variant={`ButtonEditor ${
              editorState.getCurrentInlineStyle().has(t.name) &&
              "text-gray-800 bg-gray-100"
            }`}
            onMouseDown={(e) => {
              e.preventDefault();
              setValue(name, RichUtils.toggleInlineStyle(editorState, t.name));
            }}
          >
            {t.icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
