import React from "react";

const Blogs = () => {
  return <form> 
  <label form="fname">Initial Investment:</label>
  <input type="number" id="InitialInvestment" name="InitialInvestment"></input>
    <label form="fname">Annual Return Rate:</label>
  <input type="number" id="AnnualRR" name="AnnualRR"></input>
  <label form="fname">Annual Management Fee:</label>
  <input type="number" id="AnnualMF" name="AnnualMF"></input>
  <label form="fname">Contribution:</label>
  <input type="number" id="Contribution" name="Contrinbution"></input>
  <label form="fname">End Amount:</label>
  <input type="number" id="EndA" name="fname"></input>
  <button type="button">Calculate</button>
  </form>
}


export default Blogs;