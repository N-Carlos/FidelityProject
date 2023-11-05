import React from "react";
import Chart from "../components/chart.js";

const Contact = () => {

  const labelInputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Positions label and input to each end
    alignItems: 'center', // Aligns elements vertically
  };

  return (
    <div>
      <Chart></Chart>
    </div>
  );
};

export default Contact;
