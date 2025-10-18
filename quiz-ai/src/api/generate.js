import OpenAI from "openai";

export async function generateQuestions(prompt) {
 const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});


  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Generate 5 quiz questions about ${prompt}. 
        Return only the questions, one per line.`,
      },
    ],
  });

  const text = completion.choices[0].message.content;
  return text.split("\n").filter(Boolean);
}
