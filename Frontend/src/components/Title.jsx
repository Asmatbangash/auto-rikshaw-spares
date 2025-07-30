import React from "react";

function Title({ text1, text2 }) {
  return (
    <p className="text-gray-500">
      {text1} <span className="text-gray-700 font-medium">{text2}</span>
    </p>
  );
}

export default Title;
