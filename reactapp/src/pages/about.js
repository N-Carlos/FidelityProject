import React, { useState } from "react";
import PieChart from "../components/piecharts";
import "chart.js/auto";

const UserData = [
  {
    id: "Initial Investment",
    year: "Initial Investment",
    userGain: 2000,
    userLost: 823,
  },
  {
    id: "Annual Return Rate",
    year: "Annual Return Rate",
    userGain: 7.2,
    userLost: 345,
  },
  {
    id: "Annual Management Fee",
    year: 2023,
    userGain: 1.0,
    userLost: 555,
  },
  {
    id: "Contribution",
    year: "Contribution",
    userGain: 500,
    userLost: 4555,
  },
  {
    id: "Expected Return ",
    year: "Expected Return",
    userGain: 91602,
    userLost: 234,
  },
];

const About = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Info",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default About;
