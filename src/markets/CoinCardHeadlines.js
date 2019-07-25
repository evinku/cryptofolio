import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function CoinCardHeadlines() {
  return (
    <>
      <StyledCard>
        <span>Rank</span>
        <span>Name</span>
        <span>Price</span>
        <span>Marketcap</span>
      </StyledCard>
      <hr />
    </>
  );
}

export default CoinCardHeadlines;
