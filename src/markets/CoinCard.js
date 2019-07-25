import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const StyledData = styled.span``;

const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

function CoinCard({ market_cap_rank, image, name, current_price, market_cap }) {
  return (
    <>
      <StyledCard>
        <StyledData>{market_cap_rank}</StyledData>
        <StyledGroup>
          <StyledImg alt={name} src={image} />
          <StyledData>{name}</StyledData>
        </StyledGroup>
        <StyledData>${current_price}</StyledData>
        <StyledData>${market_cap}</StyledData>
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
