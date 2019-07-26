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
