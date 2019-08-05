import React from "react";
import CoinCards from "./CoinCards";
import MarketDataCard from "./MarketDataCard";
import Search from "./Search";
import Title from "../components/Title";
import { getMarketData } from "../utils/coinGecko";
import PropTypes from "prop-types";

function MarketsPage({ coinData }) {
  const [filteredCoins, setFilteredCoins] = React.useState(null);
  const [marketData, setMarketData] = React.useState({});

  React.useEffect(() => {
    getMarketData().then(marketData => setMarketData(marketData));
  }, []);

  function handleSearchChange(filteredCoins) {
    setFilteredCoins(filteredCoins);
  }

  return (
    <>
      <Title size="L">Markets</Title>
      <MarketDataCard marketData={marketData} />
      <Search onSearchChange={handleSearchChange} coinData={coinData} />
      <CoinCards coinData={filteredCoins ? filteredCoins : coinData} />
    </>
  );
}
MarketsPage.propTypes = {
  coinData: PropTypes.array.isRequired
};

export default MarketsPage;
