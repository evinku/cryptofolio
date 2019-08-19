import React from "react";
import styled from "styled-components";
import ActionButton from "../components/ActionButton";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 30px 4.5fr 3.5fr 3.5fr 30px;
  font-weight: bold;
`;

const BookmarkButton = styled(ActionButton).attrs({
  icon: "fa-trash-alt"
})`
  color: ${props => props.color};
  font-size: 20px;
  background: transparent;
`;

function CoinCardHeadlines({ onShowBookmarked, showBookmarked }) {
  return (
    <>
      <StyledCard>
        <span>No</span>
        <span>Name</span>
        <span>Price</span>
        <span>Marketcap</span>
        <BookmarkButton
          color={showBookmarked ? "red" : "blue"}
          onClick={onShowBookmarked}
        />
      </StyledCard>
      <hr />
    </>
  );
}

export default CoinCardHeadlines;
