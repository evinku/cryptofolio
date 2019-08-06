import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: bold;
`;

function PortfolioCardsHeadlines() {
  return (
    <>
      <StyledCard>
        <span>Quantity</span>
        <span>Price</span>
        <span>Holdings</span>
      </StyledCard>
      <hr />
    </>
  );
}

export default PortfolioCardsHeadlines;
