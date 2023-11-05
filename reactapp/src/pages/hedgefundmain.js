import React from "react";
import { HedgeTable } from "../components/hedgefundstyles";

const Hedge = () => {
  const data = [
    { 
      name: "Investor 1",
      amount1: "$10,000", amount2: "$5,000", amount3: "$8,000", amount4: "$7,000", amount5: "$12,000",
      amount6: "$6,000", amount7: "$9,000", amount8: "$11,000", amount9: "$15,000", amount10: "$14,000",
      amount11: "$16,000", amount12: "$18,000", amount13: "$22,000", amount14: "$25,000", amount15: "$28,000"
    },
    { 
      name: "Investor 2",
      amount1: "$20,000", amount2: "$15,000", amount3: "$18,000", amount4: "$17,000", amount5: "$22,000",
      amount6: "$16,000", amount7: "$19,000", amount8: "$21,000", amount9: "$25,000", amount10: "$24,000",
      amount11: "$26,000", amount12: "$29,000", amount13: "$32,000", amount14: "$35,000", amount15: "$38,000"
    },
    { 
      name: "Investor 3",
      amount1: "$15,000", amount2: "$10,000", amount3: "$13,000", amount4: "$12,000", amount5: "$17,000",
      amount6: "$11,000", amount7: "$14,000", amount8: "$16,000", amount9: "$20,000", amount10: "$19,000",
      amount11: "$23,000", amount12: "$27,000", amount13: "$30,000", amount14: "$33,000", amount15: "$36,000"
    },
    { 
      name: "Investor 4",
      amount1: "$30,000", amount2: "$25,000", amount3: "$28,000", amount4: "$27,000", amount5: "$32,000",
      amount6: "$26,000", amount7: "$29,000", amount8: "$31,000", amount9: "$35,000", amount10: "$34,000",
      amount11: "$37,000", amount12: "$40,000", amount13: "$43,000", amount14: "$46,000", amount15: "$49,000"
    },
    { 
      name: "Investor 5",
      amount1: "$25,000", amount2: "$20,000", amount3: "$23,000", amount4: "$22,000", amount5: "$27,000",
      amount6: "$21,000", amount7: "$24,000", amount8: "$26,000", amount9: "$30,000", amount10: "$29,000",
      amount11: "$33,000", amount12: "$37,000", amount13: "$40,000", amount14: "$43,000", amount15: "$46,000"
    },
    { 
      name: "Investor 6",
      amount1: "$35,000", amount2: "$30,000", amount3: "$33,000", amount4: "$32,000", amount5: "$37,000",
      amount6: "$31,000", amount7: "$34,000", amount8: "$36,000", amount9: "$40,000", amount10: "$39,000",
      amount11: "$43,000", amount12: "$47,000", amount13: "$50,000", amount14: "$53,000", amount15: "$56,000"
    },
    { 
      name: "Investor 7",
      amount1: "$40,000", amount2: "$35,000", amount3: "$38,000", amount4: "$37,000", amount5: "$42,000",
      amount6: "$36,000", amount7: "$39,000", amount8: "$41,000", amount9: "$45,000", amount10: "$44,000",
      amount11: "$48,000", amount12: "$52,000", amount13: "$55,000", amount14: "$58,000", amount15: "$61,000"
    },
    { 
      name: "Investor 8",
      amount1: "$50,000", amount2: "$45,000", amount3: "$48,000", amount4: "$47,000", amount5: "$52,000",
      amount6: "$46,000", amount7: "$49,000", amount8: "$51,000", amount9: "$55,000", amount10: "$54,000",
      amount11: "$58,000", amount12: "$62,000", amount13: "$65,000", amount14: "$68,000", amount15: "$71,000"
    },
    { 
      name: "Investor 9",
      amount1: "$60,000", amount2: "$55,000", amount3: "$58,000", amount4: "$57,000", amount5: "$62,000",
      amount6: "$56,000", amount7: "$59,000", amount8: "$61,000", amount9: "$65,000", amount10: "$64,000",
      amount11: "$68,000", amount12: "$72,000", amount13: "$75,000", amount14: "$78,000", amount15: "$81,000"
    },
    { 
      name: "Investor 10",
      amount1: "$70,000", amount2: "$65,000", amount3: "$68,000", amount4: "$67,000", amount5: "$72,000",
      amount6: "$66,000", amount7: "$69,000", amount8: "$71,000", amount9: "$75,000", amount10: "$74,000",
      amount11: "$78,000", amount12: "$82,000", amount13: "$85,000", amount14: "$88,000", amount15: "$91,000"
    },
    { 
      name: "Investor 11",
      amount1: "$80,000", amount2: "$75,000", amount3: "$78,000", amount4: "$77,000", amount5: "$82,000",
      amount6: "$76,000", amount7: "$79,000", amount8: "$81,000", amount9: "$85,000", amount10: "$84,000",
      amount11: "$88,000", amount12: "$92,000", amount13: "$95,000", amount14: "$98,000", amount15: "$101,000"
    },
    { 
      name: "Investor 12",
      amount1: "$90,000", amount2: "$85,000", amount3: "$88,000", amount4: "$87,000", amount5: "$92,000",
      amount6: "$86,000", amount7: "$89,000", amount8: "$91,000", amount9: "$95,000", amount10: "$94,000",
      amount11: "$98,000", amount12: "$102,000", amount13: "$105,000", amount14: "$108,000", amount15: "$111,000"
    },
    { 
      name: "Investor 13",
      amount1: "$100,000", amount2: "$95,000", amount3: "$98,000", amount4: "$97,000", amount5: "$102,000",
      amount6: "$96,000", amount7: "$99,000", amount8: "$101,000", amount9: "$105,000", amount10: "$104,000",
      amount11: "$108,000", amount12: "$112,000", amount13: "$115,000", amount14: "$118,000", amount15: "$121,000"
    },
    { 
      name: "Investor 14",
      amount1: "$110,000", amount2: "$105,000", amount3: "$108,000", amount4: "$107,000", amount5: "$112,000",
      amount6: "$106,000", amount7: "$109,000", amount8: "$111,000", amount9: "$115,000", amount10: "$114,000",
      amount11: "$118,000", amount12: "$122,000", amount13: "$125,000", amount14: "$128,000", amount15: "$131,000"
    },
    { 
      name: "Investor 15",
      amount1: "$120,000", amount2: "$115,000", amount3: "$118,000", amount4: "$117,000", amount5: "$122,000",
      amount6: "$116,000", amount7: "$119,000", amount8: "$121,000", amount9: "$125,000", amount10: "$124,000",
      amount11: "$128,000", amount12: "$132,000", amount13: "$135,000", amount14: "$138,000", amount15: "$141,000"
    },
    // You can add more rows if needed
  ];

  return (
    <HedgeTable>
      <h1>This is the hedge fund</h1>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Investor Name</th>
              {[...Array(15).keys()].map((col) => (
                <th key={col}>Amount {col + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                {[...Array(15).keys()].map((col) => (
                  <td key={col}>{item[`amount${col + 1}`]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HedgeTable>
  );
};

export default Hedge;
