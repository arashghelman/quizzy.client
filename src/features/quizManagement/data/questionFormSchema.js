export const schema = {
  type: {
    required: {
      value: true,
      message: "Please choose a question type",
    },
  },
  title: {
    required: {
      value: true,
      message: "Please enter a question title",
    },
  },
  answer: {
    value: { required: { value: true, message: "Please enter an answer" } },
  },
};
