import React from "react";
import { useScore } from "./quizScoreCard/useScore";
import ScoreProgressBar from "./quizScoreCard/ScoreProgressBar";
import TipLabel from "./quizScoreCard/TipLabel";

export default function QuizScoreCard({
  quizState: { hasName, hasGrades, hasDescription, hasQuestions, isPublic },
}) {
  const tips = [
    { label: "Pick a relevant quiz name", isDone: hasName },
    { label: "Add grades", isDone: hasGrades },
    { label: "Write a description about your quiz", isDone: hasDescription },
    { label: "Add 4 questions at least", isDone: hasQuestions },
    { label: "Make your quiz public", isDone: isPublic },
  ];

  const value = tips.filter((tip) => tip.isDone).length;
  const max = tips.length;

  const { score, barColor } = useScore(value, max);

  return (
    <div className="flex flex-col gap-loose bg-white text-gray-light-1 border-1 rounded-lg p-loose">
      <div>
        <h1 className="font-semibold">Quiz score</h1>
      </div>
      <div className="flex flex-col gap-tight">
        <div className="text-2xl font-bold">{score}%</div>
        <ScoreProgressBar value={value} max={max} color={barColor} />
      </div>
      <div role="list" className="flex flex-col gap-base">
        {tips.map(({ label, isDone }) => (
          <TipLabel key={label} label={label} isDone={isDone} />
        ))}
      </div>
    </div>
  );
}
