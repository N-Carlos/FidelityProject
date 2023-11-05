import React from "react";

const Contact = () => {

  const labelInputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Positions label and input to each end
    alignItems: 'center', // Aligns elements vertically
  };

  return (
    <div>
      <h1 style={labelInputContainerStyle}>Mail us on feedback@geeksforgeeks.org</h1>
    </div>
  );
};

export default Contact;
