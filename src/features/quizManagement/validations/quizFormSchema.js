import * as yup from "yup";
import * as messages from "../messages/quizFormMessages";

const NAME_MIN_LENGTH = 4;
const SUBJECTS_MIN_COUNT = 3;
const SUBJECTS_MAX_COUNT = 5;

export const schema = yup.object({
  name: yup
    .string()
    .required(messages.NAME_REQUIRED_MESSAGE)
    .min(NAME_MIN_LENGTH, messages.NAME_REQUIRED_MESSAGE),
  subjects: yup
    .array()
    .required(messages.SUBJECTS_VALID_COUNT_MESSAGE)
    .nullable()
    .min(SUBJECTS_MIN_COUNT, messages.SUBJECTS_VALID_COUNT_MESSAGE)
    .max(SUBJECTS_MAX_COUNT, messages.SUBJECTS_VALID_COUNT_MESSAGE),
});
