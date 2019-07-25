import React from "react";
import CoinCards from "./CoinCards";
import coinData from "./__mock__/coinData";

function MarketsPage() {
  return (
    <>
      <CoinCards coinData={coinData} />
    </>
  );
}

export default MarketsPage;
