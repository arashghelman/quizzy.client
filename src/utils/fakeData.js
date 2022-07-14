export const quiz = {
  id: "1",
  name: "Basic English Test",
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
  thumbnailUrl:
    "https://media.istockphoto.com/vectors/quiz-neon-text-banner-on-brick-wall-questions-team-game-quiz-night-vector-id1223692043?k=20&m=1223692043&s=170667a&w=0&h=MXrR6XcdSGCYpzeSGxj7ANNzQfAcbXT-68cEjZ1dVzE=",
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
  {
    id: "3",
    type: "MultipleChoice",
    title: "I'm going ___ Madrid next week.",
    options: [
      { id: "1", value: "of", isCorrect: false },
      { id: "2", value: "in", isCorrect: false },
      { id: "3", value: "at", isCorrect: false },
      { id: "4", value: "to", isCorrect: true },
    ],
  },
  {
    id: "4",
    type: "MultipleChoice",
    title: "He was born ___ the 19th century.",
    options: [
      { id: "1", value: "at", isCorrect: false },
      { id: "2", value: "on", isCorrect: false },
      { id: "3", value: "in", isCorrect: true },
    ],
  },
];

export const pollResult = [
  { id: "1", result: 12 },
  { id: "2", result: 57 },
  { id: "3", result: 31 },
];

export const quizState = {
  hasName: quiz.name !== null,
  hasGrades: quiz.grades !== null,
  hasDescription: quiz.description !== null,
  hasQuestions: questions.length >= 4,
  isPublic: quiz.status.type === "Public",
};

export const subjects = [
  "Arts",
  "Biology",
  "Chemistry",
  "Computers",
  "Design",
  "English",
  "Fun",
  "Geography",
  "History",
  "Life Skills",
  "Mathematics",
  "Physics",
  "Science",
  "Social Studies",
  "World Languages",
].map((sub, index) => ({
  subjectId: ++index,
  name: sub,
}));
