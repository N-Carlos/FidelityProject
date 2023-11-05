import React from "react";
import Stylediv from "./form.js";


const Blogs = () => {
<input type="number"></input>
  src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
  <canvas id="myChart" style="width:100%;max-width:700px"></canvas>


  return <form>
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

  new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "My Hedge Fund"
    }
  }
});


</form>;
};

export default Blogs;
