import React from "react";
import { HedgeTable } from "../components/hedgefundstyles";

const Hedge = () => {
  const data = [
    { 
      name: "AlphaWave Capital", 
      strategy: "Equity Long-Short", 
      assetsUnderManagement: "$500 million", 
      yearFounded: "2008", 
      location: "New York", 
      annualReturn: "12%",
      riskRating: "Low",
      investmentCost: "$800 minimum investment",
      numberOfInvestors: "7/50"
    },
    { 
      name: "Apex Asset Management", 
      strategy: "Fixed Income Arbitrage", 
      assetsUnderManagement: "$300 million", 
      yearFounded: "2010", 
      location: "London", 
      annualReturn: "10%",
      riskRating: "Moderate",
      investmentCost: "$900 minimum investment",
      numberOfInvestors: "12/50"
    },
    { 
      name: "Quantum Investments", 
      strategy: "Global Macro", 
      assetsUnderManagement: "$750 million", 
      yearFounded: "2005", 
      location: "Hong Kong", 
      annualReturn: "14%",
      riskRating: "High",
      investmentCost: "$750 minimum investment",
      numberOfInvestors: "18/50"
    },
    { 
      name: "Stellar Hedge Fund", 
      strategy: "Event-Driven", 
      assetsUnderManagement: "$400 million", 
      yearFounded: "2012", 
      location: "San Francisco", 
      annualReturn: "11%",
      riskRating: "Moderate",
      investmentCost: "$950 minimum investment",
      numberOfInvestors: "5/50"
    },
    { 
      name: "Golden Gate Capital", 
      strategy: "Quantitative", 
      assetsUnderManagement: "$600 million", 
      yearFounded: "2007", 
      location: "Chicago", 
      annualReturn: "13%",
      riskRating: "Low",
      investmentCost: "$850 minimum investment",
      numberOfInvestors: "20/50"
    },
    { 
      name: "Summit Strategies", 
      strategy: "Distressed Debt", 
      assetsUnderManagement: "$450 million", 
      yearFounded: "2015", 
      location: "Dallas", 
      annualReturn: "9%",
      riskRating: "High",
      investmentCost: "$700 minimum investment",
      numberOfInvestors: "10/50"
    },
    { 
      name: "Capital Craft Advisors", 
      strategy: "Multi-Strategy", 
      assetsUnderManagement: "$550 million", 
      yearFounded: "2011", 
      location: "Singapore", 
      annualReturn: "11.5%",
      riskRating: "Moderate",
      investmentCost: "$600 minimum investment",
      numberOfInvestors: "15/50"
    },
    { 
      name: "Phoenix Hedge Fund", 
      strategy: "Convertible Arbitrage", 
      assetsUnderManagement: "$350 million", 
      yearFounded: "2009", 
      location: "Tokyo", 
      annualReturn: "10.5%",
      riskRating: "Low",
      investmentCost: "$500 minimum investment",
      numberOfInvestors: "7/50"
    },
    { 
      name: "Horizon Capital Management", 
      strategy: "Long-Short Credit", 
      assetsUnderManagement: "$700 million", 
      yearFounded: "2006", 
      location: "Sydney", 
      annualReturn: "12.5%",
      riskRating: "Moderate",
      investmentCost: "$700 minimum investment",
      numberOfInvestors: "12/50"
    },
    { 
      name: "Vanguard Ventures", 
      strategy: "Arbitrage", 
      assetsUnderManagement: "$550 million", 
      yearFounded: "2013", 
      location: "Frankfurt", 
      annualReturn: "10%",
      riskRating: "High",
      investmentCost: "$800 minimum investment",
      numberOfInvestors: "8/50"
    },
    { 
      name: "Silver Oak Partners", 
      strategy: "Equity Long-Short", 
      assetsUnderManagement: "$600 million", 
      yearFounded: "2014", 
      location: "Chicago", 
      annualReturn: "11%",
      riskRating: "Moderate",
      investmentCost: "$750 minimum investment",
      numberOfInvestors: "11/50"
    },
    { 
      name: "Pacific Crest Investments", 
      strategy: "Event-Driven", 
      assetsUnderManagement: "$450 million", 
      yearFounded: "2007", 
      location: "New York", 
      annualReturn: "12.5%",
      riskRating: "Low",
      investmentCost: "$850 minimum investment",
      numberOfInvestors: "7/50"
    },
    { 
      name: "Green Stone Asset Management", 
      strategy: "Global Macro", 
      assetsUnderManagement: "$850 million", 
      yearFounded: "2005", 
      location: "Hong Kong", 
      annualReturn: "15%",
      riskRating: "High",
      investmentCost: "$900 minimum investment",
      numberOfInvestors: "14/50"
    },
    { 
      name: "Neptune Capital Group", 
      strategy: "Quantitative", 
      assetsUnderManagement: "$750 million", 
      yearFounded: "2010", 
      location: "London", 
      annualReturn: "13%",
      riskRating: "Moderate",
      investmentCost: "$950 minimum investment",
      numberOfInvestors: "9/50"
    },
    { 
      name: "Everest Equity Fund", 
      strategy: "Fixed Income Arbitrage", 
      assetsUnderManagement: "$400 million", 
      yearFounded: "2009", 
      location: "San Francisco", 
      annualReturn: "11%",
      riskRating: "Low",
      investmentCost: "$700 minimum investment",
      numberOfInvestors: "12/50"
    }
    // You can add more hedge funds if needed
  ];

  return (
    <HedgeTable>
      <h1>Hedge Fund Information</h1>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Fund Name</th>
              <th>Strategy</th>
              <th>AUM (Assets Under Management)</th>
              <th>Year Founded</th>
              <th>Location</th>
              <th>Annual Return</th>
              <th>Risk Rating</th>
              <th>Minimum Investment</th>
              <th>Number of Investors</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.strategy}</td>
                <td>{item.assetsUnderManagement}</td>
                <td>{item.yearFounded}</td>
                <td>{item.location}</td>
                <td>{item.annualReturn}</td>
                <td>{item.riskRating}</td>
                <td>{item.investmentCost}</td>
                <td>{item.numberOfInvestors}</td> {/* New cell */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HedgeTable>
  );
};

export default Hedge;
