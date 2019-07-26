import React from "react";
import CoinCards from "./CoinCards";
import { getCoinData } from "../utils/coinGecko";

function MarketsPage() {
  const [coinData, setCoinData] = React.useState([]);

  React.useEffect(() => {
    getCoinData().then(coinData => setCoinData(coinData));
  });

  return (
    <>
      <CoinCards coinData={coinData} />
    </>
  );
}

export default MarketsPage;
