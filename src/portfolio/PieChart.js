import React from "react";
import Chart from "react-apexcharts";

function findPriceByName(coins, name) {
  if (Object.keys(coins).length === 0) {
    return 0;
  }
  const coin = coins[name];
  return coin && coin.current_price;
}

function totalHoldingsPerCoin(total, coinData) {
  if (Object.keys(total).length === 0) {
    return 0;
  }
  return Object.keys(total).map(key => {
    const amount = total[key];
    const price = findPriceByName(coinData, key);
    return amount * price;
  });
}

function PieChart({ total, coinData }) {
  const pieData = {
    options: {
      labels: Object.keys(total)
    },
    series: totalHoldingsPerCoin(total, coinData)
  };

  return (
    <div>
      <Chart
        options={pieData.options}
        series={pieData.series}
        type="pie"
        width="380"
      />
    </div>
  );
}

export default PieChart;
