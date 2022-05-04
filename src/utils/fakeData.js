export const quiz = {
  id: "1",
  name: "Basic English Test - 1",
  status: { type: "Public" },
  subjects: [
    { name: "English", id: "1" },
    { name: "World Languages", id: "2" },
    { name: "Fun", id: "3" },
  ],
  grades: {
    min: { name: "1st", id: "1" },
    max: { name: "9th", id: "2" },
  },
  description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam esse velit quibusdam, libero iure quaerat eius, illum maxime rem quae aperiam accusantium, ipsum fugiat beatae eos autem? Quia, explicabo repellendus.`,
  thumbnail: "https://blog.hubspot.com/hubfs/google-quiz.jpg",
};

export const questions = [
  {
    id: "1",
    type: "MultipleChoice",
    title: "Go ___ these stairs until you reach the top floor.",
    options: [
      { id: "1", value: "in", isCorrect: false },
      { id: "2", value: "on", isCorrect: false },
      { id: "3", value: "through", isCorrect: false },
      { id: "4", value: "up", isCorrect: true },
    ],
  },
  {
    id: "2",
    type: "Poll",
    title: "Why are you learning English?",
    options: [
      { id: "1", value: "I want to go abroad" },
      { id: "2", value: "For fun" },
      { id: "3", value: "I have foreign friends" },
    ],
  },
];

export const pollResult = [
  { id: "1", result: 12 },
  { id: "2", result: 57 },
  { id: "3", result: 31 },
];
