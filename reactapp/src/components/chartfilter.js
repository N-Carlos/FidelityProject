import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ChartFilter;
