import styled from "styled-components";

export const HedgeTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh; /* Increase the minimum height to make the table taller */
  padding: 20px; /* Add padding to bring it in more */

  h1 {
    font-size: 24px;
    /* Add any other h1 styles you want */
  }

  table {
    width: 80%;
    margin: 0 auto;
    border: 1px solid #000;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #000;
      padding: 10px; /* Increase cell padding to make the table taller */
      text-align: left;
    }
  }
`;
