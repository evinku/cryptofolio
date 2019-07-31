import React from "react";
import CoinCards from "./CoinCards";
import MarketDataCard from "./MarketDataCard";
import Search from "./Search";
import Title from "../components/Title";

function MarketsPage({ coinData, marketData }) {
  const [filteredCoins, setFilteredCoins] = React.useState(null);

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

export default MarketsPage;
