import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import numeral from "numeral";
import CoinCardHeadlines from "./CoinCardHeadlines";
import ActionButton from "../components/ActionButton";
import { getFromLocal, setToLocal } from "../services";

const FavButton = styled(ActionButton).attrs({
  icon: "fa-star"
})`
  color: rgba(255, 0, 0, 0.8);
  font-size: 20px;
  background: transparent;
`;

const StyledSection = styled.section`
  margin: 5px;
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 30px 4.5fr 3.5fr 3.5fr 30px;
`;

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledGroupImage = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledRank = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 14px;
  color: ${props => props.color};
`;

const StyledCoinName = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.64);
`;

function CoinCards({ coinData, filteredCoins }) {
  const [showBookmarked, setShowBookmarked] = React.useState(false);
  const [favorites, setFavorites] = React.useState(
    getFromLocal("favorites") || []
  );

  React.useEffect(() => {
    setToLocal("favorites", favorites);
  }, [favorites]);

  function handleFavClick(coinId) {
    if (favorites.includes(coinId)) {
      const index = favorites.findIndex(favorite => favorite === coinId);
      const newFavorites = favorites
        .slice(0, index)
        .concat(favorites.slice(index + 1, favorites.length));
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, coinId]);
    }
  }

  function handleShowBookmarked() {
    setShowBookmarked(!showBookmarked);
  }

  function renderCoinCard(filteredCoin) {
    return (
      <div key={coinData[filteredCoin].id}>
        <StyledCard>
          <StyledRank>{coinData[filteredCoin].market_cap_rank}</StyledRank>
          <StyledGroupImage>
            <StyledImg
              alt={coinData[filteredCoin].name}
              src={coinData[filteredCoin].image}
            />
            <StyledGroup>
              <span>{coinData[filteredCoin].symbol.toUpperCase()}</span>
              <StyledCoinName>{coinData[filteredCoin].name}</StyledCoinName>
            </StyledGroup>
          </StyledGroupImage>
          <StyledGroup>
            <span>
              {new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "USD"
              }).format(coinData[filteredCoin].current_price)}
            </span>
            <StyledSpan
              color={
                coinData[filteredCoin].price_change_percentage_24h &&
                coinData[filteredCoin].price_change_percentage_24h
                  .toString()
                  .startsWith("-")
                  ? "#F5A099"
                  : "#A8D7B6"
              }
            >
              {Math.round(
                coinData[filteredCoin].price_change_percentage_24h * 100
              ) / 100}{" "}
              %
            </StyledSpan>
          </StyledGroup>
          <StyledGroup>
            <span>
              {numeral(coinData[filteredCoin].market_cap).format("($0.00 a)")}
            </span>
            <StyledSpan
              color={
                coinData[filteredCoin].market_cap_change_percentage_24h &&
                coinData[filteredCoin].market_cap_change_percentage_24h
                  .toString()
                  .startsWith("-")
                  ? "#F5A099"
                  : "#A8D7B6"
              }
            >
              {Math.round(
                coinData[filteredCoin].market_cap_change_percentage_24h * 100
              ) / 100}{" "}
              %
            </StyledSpan>
          </StyledGroup>
          <FavButton
            onClick={() => handleFavClick(coinData[filteredCoin].id)}
            icon={
              favorites.includes(coinData[filteredCoin].id)
                ? "fas fa-heart"
                : "far fa-heart"
            }
          />
        </StyledCard>
        <hr />
      </div>
    );
  }

  return (
    <StyledSection>
      <CoinCardHeadlines
        onShowBookmarked={handleShowBookmarked}
        showBookmarked={showBookmarked}
      />
      {filteredCoins.length === 0 && <div>No results...</div>}
      {filteredCoins && showBookmarked
        ? filteredCoins
            .filter(coin => {
              return favorites.includes(coin);
            })
            .map(renderCoinCard)
        : filteredCoins.map(renderCoinCard)}
    </StyledSection>
  );
}

CoinCards.propTypes = {
  coinData: PropTypes.object.isRequired,
  filteredCoins: PropTypes.array.isRequired
};

export default CoinCards;
