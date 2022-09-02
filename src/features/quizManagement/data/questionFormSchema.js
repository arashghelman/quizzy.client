import * as yup from "yup";
import * as messages from "../messages/questionFormMessages";
import * as constraints from "../constraints/questionFormConstraints";

export const typeSchema = yup.object({
  type: yup.string().nullable().required(messages.TYPE_REQUIRED_MESSAGE),
});

const baseAnswersSchema = yup.object({
  title: yup.string().required(messages.TITLE_REQUIRED_MESSAGE),
});

export const multipleChoiceAnswersSchema = baseAnswersSchema.shape({
  answers: yup
    .array()
    .min(constraints.ANSWERS_MIN_LENGTH, messages.ANSWERS_LENGTH_MESSAGE)
    .max(constraints.ANSWERS_MAX_LENGTH, messages.ANSWERS_LENGTH_MESSAGE)
    .of(
      yup.object().shape({
        value: yup.string().required(messages.ANSWER_REQUIRED_MESSAGE),
        isCorrect: yup.boolean(),
      })
    )
    .test(
      "oneCorrectAnswer",
      messages.ONE_CORRECT_ANSWER_MESSAGE,
      (value) => value.filter((val) => val.isCorrect).length === 1
    ),
});

export const pollAnswersSchema = baseAnswersSchema.shape({
  answers: yup
    .array()
    .min(constraints.ANSWERS_MIN_LENGTH, messages.ANSWERS_LENGTH_MESSAGE)
    .max(constraints.ANSWERS_MAX_LENGTH, messages.ANSWERS_LENGTH_MESSAGE)
    .of(
      yup.object().shape({
        value: yup.string().required(messages.ANSWER_REQUIRED_MESSAGE),
      })
    ),
});
