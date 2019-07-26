import trenner from "./trenner";

export function getCoinData() {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  )
    .then(response => response.json())
    .then(result => {
      const coinData = result.map(coinData => {
        return {
          id: coinData.id,
          name: coinData.name,
          image: coinData.image,
          current_price: coinData.current_price,
          market_cap: coinData.market_cap,
          market_cap_rank: coinData.market_cap_rank
        };
      });
      return coinData;
    });
}

export function getMarketData() {
  return fetch(`https://api.coingecko.com/api/v3/global`)
    .then(response => response.json())
    .then(result => {
      const marketData = {
        total_market_cap_usd: trenner(
          result.data.total_market_cap.usd.toFixed(0)
        ),
        total_volume_usd: trenner(result.data.total_volume.usd.toFixed(0)),
        market_cap_percentage_btc: result.data.market_cap_percentage.btc.toFixed(
          2
        ),
        market_cap_change_percentage_24h_usd: result.data.market_cap_change_percentage_24h_usd.toFixed(
          2
        )
      };

      return marketData;
    });
}
