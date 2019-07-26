import React from "react";
import CoinCards from "./CoinCards";
import { getCoinData, getMarketData } from "../utils/coinGecko";
import MarketDataCard from "./MarketDataCard";

function MarketsPage() {
  const [coinData, setCoinData] = React.useState([]);
  const [marketData, setMarketData] = React.useState({});

  React.useEffect(() => {
    getCoinData().then(coinData => setCoinData(coinData));
    getMarketData().then(marketData => setMarketData(marketData));
  }, []);

  return (
    <>
      <MarketDataCard marketData={marketData} />
      <CoinCards coinData={coinData} />
    </>
  );
}

export default MarketsPage;
