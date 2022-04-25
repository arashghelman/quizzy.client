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

export const question = {
  id: "1",
  title: "What's your name?",
  number: "1",
};

export const mutlipleChoiceOptions = [
  { id: "1", value: "Matt", isCorrect: false },
  { id: "2", value: "Emily", isCorrect: true },
  { id: "3", value: "Jaime", isCorrect: false },
];

export const pollOptions = [
  { id: "1", value: "Matt" },
  { id: "2", value: "Emily" },
  { id: "3", value: "Jaime" },
];

export const questions = [
  {
    id: "1",
    type: "MultipleChoice",
    title: "What's your name?",
    options: [
      { id: "1", value: "Matt", isCorrect: false },
      { id: "2", value: "Emily", isCorrect: true },
      { id: "3", value: "Jaime", isCorrect: false },
    ],
  },
  {
    id: "2",
    type: "Poll",
    title: "What's your name?",
    options: [
      { id: "1", value: "Matt" },
      { id: "2", value: "Emily" },
      { id: "3", value: "Jaime" },
    ],
  },
];
