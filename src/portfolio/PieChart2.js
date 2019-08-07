import React from "react";
import { PieChart } from "react-chartkick";
import "chart.js";

function PieChart2() {
  return (
    <PieChart
      data={[
        ["Blueberry", 44],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23],
        ["Strawberry", 23]
      ]}
    />
  );
}

export default PieChart2;
