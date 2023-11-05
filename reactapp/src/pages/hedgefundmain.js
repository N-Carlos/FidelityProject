import React from "react";
import { HedgeTable } from "../components/hedgefundstyles";

const Hedge = () => {
  const data = [
    { name: "Investor 1", amount1: "$10,000", amount2: "$5,000", amount3: "$8,000", amount4: "$7,000", amount5: "$12,000", amount6: "$6,000", amount7: "$9,000", amount8: "$11,000", amount9: "$15,000", amount10: "$14,000" },
    { name: "Investor 2", amount1: "$20,000", amount2: "$15,000", amount3: "$18,000", amount4: "$17,000", amount5: "$22,000", amount6: "$16,000", amount7: "$19,000", amount8: "$21,000", amount9: "$25,000", amount10: "$24,000" },
    { name: "Investor 3", amount1: "$15,000", amount2: "$10,000", amount3: "$13,000", amount4: "$12,000", amount5: "$17,000", amount6: "$11,000", amount7: "$14,000", amount8: "$16,000", amount9: "$20,000", amount10: "$19,000" },
    { name: "Investor 4", amount1: "$30,000", amount2: "$25,000", amount3: "$28,000", amount4: "$27,000", amount5: "$32,000", amount6: "$26,000", amount7: "$29,000", amount8: "$31,000", amount9: "$35,000", amount10: "$34,000" },
    { name: "Investor 5", amount1: "$25,000", amount2: "$20,000", amount3: "$23,000", amount4: "$22,000", amount5: "$27,000", amount6: "$21,000", amount7: "$24,000", amount8: "$26,000", amount9: "$30,000", amount10: "$29,000" },
    // You can add more rows if needed
  ];

  return (
    <HedgeTable>
      <h1>This is the hedge fund</h1>
      <table>
        <thead>
          <tr>
            <th>Investor Name</th>
            <th>Amount 1</th>
            <th>Amount 2</th>
            <th>Amount 3</th>
            <th>Amount 4</th>
            <th>Amount 5</th>
            <th>Amount 6</th>
            <th>Amount 7</th>
            <th>Amount 8</th>
            <th>Amount 9</th>
            <th>Amount 10</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.amount1}</td>
              <td>{item.amount2}</td>
              <td>{item.amount3}</td>
              <td>{item.amount4}</td>
              <td>{item.amount5}</td>
              <td>{item.amount6}</td>
              <td>{item.amount7}</td>
              <td>{item.amount8}</td>
              <td>{item.amount9}</td>
              <td>{item.amount10}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </HedgeTable>
  );
};

export default Hedge;
