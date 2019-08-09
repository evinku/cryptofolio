import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PieCharts from "./PieCharts";
import PieChart from "../portfolio/PieChart";
import { getPieData } from "../utils/portfolioServices";
import ActionButton from "../components/ActionButton";
import { postPortfolio } from "../services";

const StyledSection = styled.section``;

const StyledHr = styled.hr`
  height: 5px;
  background: black;
`;

const UploadButton = styled(ActionButton).attrs({
  icon: "fa-upload",
  type: "Upload Portfolio",
  size: "20px"
})`
  font-size: 30px;
  color: green;
`;

function InsightsPage({ totalQuantities, coinData }) {
  function handleClick() {
    const data = {
      name: "Kevin",
      email: "Kevins@gmx.de",
      date: "12.12.1990",
      data: { Bitcoin: 4, Ethereum: 20 }
    };

    postPortfolio(data);
  }

  return (
    <StyledSection>
      <Title size="L">Insights</Title>
      <Title size="S">Your Portfolio:</Title>
      <PieChart pieData={getPieData(totalQuantities, coinData)} />
      <UploadButton onClick={handleClick} />
      <StyledHr />
      <PieCharts coinData={coinData} />
    </StyledSection>
  );
}

InsightsPage.propTypes = {
  totalQuantities: PropTypes.object.isRequired,
  coinData: PropTypes.object.isRequired
};

export default InsightsPage;
