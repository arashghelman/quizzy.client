import * as yup from "yup";
import * as constraints from "../constraints/quizFormConstraints";
import * as messages from "../messages/quizFormMessages";

export const schema = yup.object({
  name: yup
    .string()
    .required(messages.NAME_REQUIRED_MESSAGE)
    .min(constraints.NAME_MIN_LENGTH, messages.NAME_REQUIRED_MESSAGE),
  subjects: yup
    .array()
    .required(messages.SUBJECTS_LENGTH_MESSAGE)
    .nullable()
    .min(constraints.SUBJECTS_MIN_LENGTH, messages.SUBJECTS_LENGTH_MESSAGE)
    .max(constraints.SUBJECTS_MAX_LENGTH, messages.SUBJECTS_LENGTH_MESSAGE),
});
