import * as yup from "yup";
import * as messages from "../messages/questionFormMessages";

const ANSWERS_MIN_COUNT = 2;
const ANSWERS_MAX_COUNT = 5;

export const schema = yup.object({
  title: yup.string().required(messages.TITLE_REQUIRED_MESSAGE),
  answers: yup
    .array()
    .min(ANSWERS_MIN_COUNT, messages.ANSWERS_VALID_COUNT_MESSAGE)
    .max(ANSWERS_MAX_COUNT, messages.ANSWERS_VALID_COUNT_MESSAGE)
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

// export const typeSchema = yup.object({
//   type: yup.string().nullable().required(messages.TYPE_REQUIRED_MESSAGE),
// });

// const baseAnswersSchema = yup.object({
//   title: yup.string().required(messages.TITLE_REQUIRED_MESSAGE),
// });

// export const multipleChoiceAnswersSchema = baseAnswersSchema.shape({
//   answers: yup
//     .array()
//     .min(ANSWERS_MIN_COUNT, messages.ANSWERS_VALID_COUNT_MESSAGE)
//     .max(ANSWERS_MAX_COUNT, messages.ANSWERS_VALID_COUNT_MESSAGE)
//     .of(
//       yup.object().shape({
//         value: yup.string().required(messages.ANSWER_REQUIRED_MESSAGE),
//         isCorrect: yup.boolean(),
//       })
//     )
//     .test(
//       "oneCorrectAnswer",
//       messages.ONE_CORRECT_ANSWER_MESSAGE,
//       (value) => value.filter((val) => val.isCorrect).length === 1
//     ),
// });

// export const pollAnswersSchema = baseAnswersSchema.shape({
//   answers: yup
//     .array()
//     .min(ANSWERS_MIN_COUNT, messages.ANSWERS_VALID_COUNT_MESSAGE)
//     .max(ANSWERS_MAX_COUNT, messages.ANSWERS_VALID_COUNT_MESSAGE)
//     .of(
//       yup.object().shape({
//         value: yup.string().required(messages.ANSWER_REQUIRED_MESSAGE),
//       })
//     ),
// });
