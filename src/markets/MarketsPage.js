import React from "react";
import CoinCards from "./CoinCards";

const coinData = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 9967,
    market_cap: 177606267772,
    market_cap_rank: 1,
    total_volume: 23976438171,
    high_24h: 10142,
    low_24h: 9571,
    price_change_24h: 258.893,
    price_change_percentage_24h: 2.6668,
    market_cap_change_24h: 4430703102,
    market_cap_change_percentage_24h: 2.5585,
    circulating_supply: 17837037.0,
    total_supply: 21000000.0,
    ath: 19665,
    ath_change_percentage: -49.29508,
    ath_date: "2017-12-16T00:00:00.000Z",
    roi: null,
    last_updated: "2019-07-25T14:05:23.441Z"
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1547034048",
    current_price: 220.06,
    market_cap: 23530958847,
    market_cap_rank: 2,
    total_volume: 8829390793,
    high_24h: 224.387,
    low_24h: 207.452,
    price_change_24h: 12.367459,
    price_change_percentage_24h: 5.9547,
    market_cap_change_24h: 1296334336,
    market_cap_change_percentage_24h: 5.83025,
    circulating_supply: 107045454.124,
    total_supply: null,
    ath: 1448,
    ath_change_percentage: -84.80856,
    ath_date: "2018-01-13T00:00:00.000Z",
    roi: {
      times: 28.5186949590113,
      currency: "btc",
      percentage: 2851.86949590113
    },
    last_updated: "2019-07-25T14:05:32.992Z"
  }
];

function MarketsPage() {
  return (
    <>
      <CoinCards coinData={coinData} />
    </>
  );
}

export default MarketsPage;
