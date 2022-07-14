import { useState, useEffect } from "react";
import { pollResult } from "@/utils/fakeData";

export function useResults(options) {
  const [pollOptions, setPollOptions] = useState([]);

  useEffect(() => setPollOptions(options), [options]);

  const [isShowingResults, setIsShowingResults] = useState(false);

  const showResults = () => {
    const updatedOptions = pollOptions.map((opt) => ({
      ...opt,
      result: pollResult.find((res) => res.id === opt.id)?.result,
    }));

    updatedOptions.sort((a, b) => b.result - a.result);

    setPollOptions(updatedOptions);
    setIsShowingResults(true);
  };

  const hideResults = () => {
    setPollOptions(options);
    setIsShowingResults(false);
  };

  return { pollOptions, isShowingResults, showResults, hideResults };
}
