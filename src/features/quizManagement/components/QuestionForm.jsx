import React from "react";
import TypeForm from "./TypeForm";
import AnswersForm from "./AnswersForm";

export default function QuestionForm() {
  const [data, setData] = React.useState({ type: "", title: "", answers: [] });

  const [isNext, setIsNext] = React.useState(false);

  console.log(data);

  return (
    <div>
      <TypeForm
        isHidden={isNext}
        setData={setData}
        onNext={() => setIsNext(true)}
      />
      <AnswersForm
        isHidden={!isNext}
        type={data.type}
        setData={setData}
        onBack={() => setIsNext(false)}
      />
    </div>
  );
}
