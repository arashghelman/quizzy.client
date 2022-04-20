import React from "react";
import PropTypes from "prop-types";

export default function Status({ label }) {
  const bgColors = {
    Public: "bg-green-300",
    Private: "bg-amber-200",
  };

  return (
    <span
      className={`px-3 py-1 text-sm text-gray-600 font-nunito font-semibold rounded-full ${bgColors[label]}`}
    >
      {label}
    </span>
  );
}

Status.propTypes = {
  label: PropTypes.oneOf(["Public", "Private"]),
};
