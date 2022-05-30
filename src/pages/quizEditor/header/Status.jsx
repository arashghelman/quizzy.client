import React from "react";
import PropTypes from "prop-types";

export default function Status({ label }) {
  const bgColors = {
    Public: "bg-emerald-light-2",
    Draft: "bg-amber-base",
  };

  return (
    <span
      className={`px-3 py-1 text-sm text-gray-light-1 font-semibold rounded-full ${bgColors[label]}`}
    >
      {label}
    </span>
  );
}

Status.propTypes = {
  label: PropTypes.oneOf(["Public", "Draft"]),
};
