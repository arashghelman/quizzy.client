const nameErrorMessage = "Please enter a name longer than 3 characters";

export const schema = {
  name: {
    required: {
      value: true,
      message: nameErrorMessage,
    },
    minLength: { value: 4, message: nameErrorMessage },
  },
  subjects: {
    validate: (value) =>
      (value.length >= 3 && value.length <= 5) ||
      "Please choose three to five relevant subjects",
  },
};
