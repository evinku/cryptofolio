import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 30px 4.5fr 3.5fr 3.5fr 30px;
  font-weight: bold;
`;

const BookmarkButton = styled(ActionButton).attrs({})`
  color: rgba(255, 0, 0, 0.8);
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
          onClick={onShowBookmarked}
          icon={showBookmarked ? "fas fa-heart" : "far fa-heart"}
        />
      </StyledCard>
      <hr />
    </>
  );
}

CoinCardHeadlines.propTypes = {
  onShowBookmarked: PropTypes.func.isRequired,
  showBookmarked: PropTypes.bool.isRequired
};

export default CoinCardHeadlines;
