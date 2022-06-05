import React from "react";
import PropTypes from "prop-types";

export default function Heading({ text }) {
  return <h1 className="font-bold text-3xl text-gray-base">{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string,
};
