import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 25px 4fr 3fr 4fr;
  font-weight: bold;
`;

function CoinCardHeadlines() {
  return (
    <>
      <StyledCard>
        <span>No</span>
        <span>Name</span>
        <span>Price</span>
        <span>Marketcap</span>
      </StyledCard>
      <hr />
    </>
  );
}

export default CoinCardHeadlines;
