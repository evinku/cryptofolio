import React from "react";
import CoinCards from "./CoinCards";
import { getCoinData, getMarketData } from "../utils/coinGecko";
import MarketDataCard from "./MarketDataCard";
import Search from "./Search";
import Title from "../components/Title";

function MarketsPage() {
  const [coinData, setCoinData] = React.useState([]);
  const [marketData, setMarketData] = React.useState({});
  const [filteredCoins, setFilteredCoins] = React.useState(null);

  React.useEffect(() => {
    getCoinData().then(coinData => setCoinData(coinData));
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

export default MarketsPage;
