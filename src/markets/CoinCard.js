import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import trenner from "../utils/trenner";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

function CoinCard({ market_cap_rank, image, name, current_price, market_cap }) {
  return (
    <>
      <StyledCard>
        <span>{market_cap_rank}</span>
        <StyledGroup>
          <StyledImg alt={name} src={image} />
          <span>{name}</span>
        </StyledGroup>
        <span>${trenner(current_price)}</span>
        <span>${trenner(market_cap)}</span>
      </StyledCard>
      <hr />
    </>
  );
}

CoinCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  current_price: PropTypes.number,
  market_cap_rank: PropTypes.number,
  market_cap: PropTypes.number
};

export default CoinCard;
