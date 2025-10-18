import { useState, useEffect } from "react";
import { generateQuestions } from "../api/generate";

export function useInfiniteQuestions(prompt) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    setLoading(true);
    const newQuestions = await generateQuestions(prompt);
    setQuestions((prev) => [...prev, ...newQuestions]);
    setLoading(false);
  }

  useEffect(() => {
    if (prompt) loadMore();
  }, [prompt]);

  return { questions, loadMore, loading };
}
