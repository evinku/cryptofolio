export function findPriceByName(coins, name) {
  if (Object.keys(coins).length === 0) {
    return 0;
  }
  const coin = coins[name];
  return coin && coin.current_price;
}

export function findImageByName(coins, name) {
  const coin = coins[name];
  return coin && coin.image;
}

export function calculateHoldings(price, amount) {
  const holdings = price * amount;

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD"
  }).format(holdings);
}

export function totalHoldings(total, coinData) {
  if (Object.keys(total).length === 0) {
    return 0;
  }
  return Object.keys(total)
    .map(key => {
      const amount = total[key];
      const price = findPriceByName(coinData, key);
      return amount * price;
    })
    .reduce((acc, amount) => acc + amount);
}

export function getPieData(totalQuantities, coinData) {
  function totalHoldingsPerCoin(totalQuantities, coinData) {
    if (Object.keys(totalQuantities).length === 0) {
      return 0;
    }
    return Object.keys(totalQuantities).map(key => {
      const amount = totalQuantities[key];
      const price = findPriceByName(coinData, key);
      return amount * price;
    });
  }
  return {
    options: {
      labels: Object.keys(totalQuantities)
    },
    series: totalHoldingsPerCoin(totalQuantities, coinData)
  };
}
