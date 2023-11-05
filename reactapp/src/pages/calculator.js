import React, {useState} from "react";

const Blogs = () => {

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Adjust this to 'row' if you want elements to display horizontally
    gap: '20px', // Adjust the gap between elements
    width: '80%',
    margin: '0 auto'
  };

  const labelInputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Positions label and input to each end
    alignItems: 'center', // Aligns elements vertically
  };

  const labelStyle = {
    margin: '10px 0', // Add margin to create space between labels and inputs
    // Add any other specific styles for labels if needed
    minWidth: '100px'
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flex: '1', // Input occupies remaining space
    maxWidth: '300px', // Set a maximum width for inputs
  };

  const inputStyle= {
    flex: '1',
    maxWidth: '300px'
  }

  const resultContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Define specific styles for the result container here
  };
  
  const [result, setResult] = useState(null);



  const calculateResult = () => {
    const initialInvestment = parseFloat(document.getElementById('InitialInvestment').value) || 0;
    const annualReturnRate = parseFloat(document.getElementById('AnnualRR').value) || 0;
    const annualManagementFee = parseFloat(document.getElementById('AnnualMF').value) || 0;

    const calculatedResult = initialInvestment * annualReturnRate + annualManagementFee;

    setResult(calculatedResult);
  };


  return (
    <div style={formContainerStyle}>
      <form> 
        <div style={labelInputContainerStyle}>
          <label style={labelStyle} form="fname">Initial Investment:</label>
          <div style={inputContainerStyle}>         
            <input style={inputStyle} type="number" id="InitialInvestment" name="InitialInvestment"></input>
          </div>
        </div>


        <div style={labelInputContainerStyle}>
          <label style={labelStyle} form="fname">Annual Return Rate:</label>
          <div style={labelStyle}>
            <input style={inputStyle} type="number" id="AnnualRR" name="AnnualRR"></input>
          </div>
        </div>

        <div style={labelInputContainerStyle}>
          <label style={labelStyle} form="fname">Annual Management Fee:</label>
          <div style={labelStyle}>
            <input style={inputStyle} type="number" id="AnnualMF" name="AnnualMF"></input>
          </div>
        </div>

        <div style={labelInputContainerStyle}>
          <label style={labelStyle} form="fname">Contribution:</label>
          <div style={labelStyle}>
            <input style={inputStyle} type="number" id="Contribution" name="Contrinbution"></input>
          </div>
        </div>

        <button style={{...labelStyle, padding:'5px 10px'}} type="button" onClick={calculateResult}>
          Calculate</button>
 

        <div style={resultContainerStyle}>
          <label style={labelStyle}>Result:</label>
          <div>{result}</div>
          
        </div>
    </form>
  </div>
  );
};


export default Blogs;