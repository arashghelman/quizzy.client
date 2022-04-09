import React from "react";
import PropTypes from "prop-types";

export default function Status({ label }) {
  return <span>{label}</span>;
}

Status.propTypes = {
  label: PropTypes.oneOf(["Public", "Private"]),
};
