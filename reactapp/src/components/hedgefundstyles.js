import styled from "styled-components";

export const HedgeTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  min-width: 80%;
  padding: 20px;

  h1 {
    font-size: 24px;
  }

  table {
    width: 100%;
    border: 1px solid #000;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #000;
      padding: 10px;
      text-align: left;
    }
  }
`;
