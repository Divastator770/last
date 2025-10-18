import { useState } from "react";
import { useInfiniteQuestions } from "../hooks/useInfiniteQuestions";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { questions, loadMore, loading } = useInfiniteQuestions(prompt);

  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <h1>🤖 AI Quiz Generator</h1>
      <input
        style={{ padding: 10, width: "60%" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter topic (e.g. Physics)"
      />
      <button
        onClick={() => setPrompt(inputValue)}
        style={{ marginLeft: 10, padding: "10px 20px" }}
      >
        Generate
      </button>

      <div style={{ marginTop: 20 }}>
        {questions.map((q, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 10,
              margin: 10,
              textAlign: "left",
            }}
          >
            {q}
          </div>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        prompt && (
          <button onClick={loadMore} style={{ padding: "10px 20px" }}>
            Load More
          </button>
        )
      )}
    </div>
  );
}
