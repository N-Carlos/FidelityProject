import React from "react";

const Blogs = () => {
  return (
    <form>
      <label form="fname">Initial Investment:</label>
      <input type="text" InitialInvestment="fname" name="fname"></input>
      <label form="fname">Annual Return Rate:</label>
      <input type="text" AnnualRR="fname" name="fname"></input>
      <label form="fname">Annual Management Fee:</label>
      <input type="text" AnnualM="fname" name="fname"></input>
      <label form="fname">Contribution:</label>
      <input type="text" Contribution="fname" name="fname"></input>
      <label form="fname">End Amount:</label>
      <input type="text" EndA="fname" name="fname"></input>
      <button type="button">Calculate</button>
    </form>
  );
};

export default Blogs;
