import React from "react";
import CoinCards from "./CoinCards";
import MarketDataCard from "./MarketDataCard";
import Search from "./Search";
import Title from "../components/Title";
import PropTypes from "prop-types";

function MarketsPage({ coinData }) {
  const [filterValue, setFilterValue] = React.useState("");

  function handleFilterChange(value) {
    setFilterValue(value);
  }

  const filteredCoins = Object.keys(coinData).filter(key =>
    coinData[key].name.toLowerCase().startsWith(filterValue)
  );

  return (
    <>
      <Title size="L">Markets</Title>
      <MarketDataCard />
      <Search onFilterChange={handleFilterChange} />
      <CoinCards filteredCoins={filteredCoins} coinData={coinData} />
    </>
  );
}
MarketsPage.propTypes = {
  coinData: PropTypes.object.isRequired
};

export default MarketsPage;
