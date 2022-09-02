export const quizzes = [
  {
    id: "1",
    name: "English quiz",
    status: "PUBLIC",
    subjects: [
      {
        id: "1",
        name: "Fun",
      },
      {
        id: "3",
        name: "English",
      },
      {
        id: "5",
        name: "Languages",
      },
    ],
    thumbnail:
      "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/08111408/English-Quiz.png",
    questions: [
      {
        id: "1",
        title: "Why are you taking this test?",
        type: "POLL",
        answers: [
          { id: "1", value: "For fun" },
          { id: "2", value: "To learn something new" },
          { id: "3", value: "No idea :)" },
        ],
      },
      {
        id: "2",
        title: "What's the past tense of fly?",
        type: "MULTIPLE_CHOICE",
        answers: [
          { id: "1", value: "flew", isCorrect: true },
          { id: "2", value: "flought", isCorrect: false },
          { id: "3", value: "flied", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "French quiz",
    status: "DRAFT",
    subjects: [
      {
        id: "1",
        name: "Fun",
      },
      {
        id: "4",
        name: "French",
      },
      {
        id: "5",
        name: "Languages",
      },
    ],
    thumbnail:
      "https://lovefrance.info/wp-content/uploads/2015/11/french-quiz.jpeg",
    questions: [],
  },
];
