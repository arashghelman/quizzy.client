import React from "react";
import PropTypes from "prop-types";
import { subjectIcon } from "@/constants/subjectIcon";

export default function SubjectTag({ label }) {
  return (
    <span className="bg-sky-light-1 px-3 py-2 text-sm rounded text-gray-light-1">
      {subjectIcon[label] + " " + label}
    </span>
  );
}

SubjectTag.propTypes = {
  label: PropTypes.string,
};
