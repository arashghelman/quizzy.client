import React from "react";
import PropTypes from "prop-types";

export default function Status({ label }) {
  const bgColors = {
    Public: "bg-emerald-200",
    Private: "bg-amber-200",
  };

  return (
    <span
      className={`px-3 py-1 text-sm text-neutral-600 rounded-full ${bgColors[label]}`}
    >
      {label}
    </span>
  );
}

Status.propTypes = {
  label: PropTypes.oneOf(["Public", "Private"]),
};
