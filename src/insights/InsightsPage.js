import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PieCharts from "./PieCharts";
import PieChart from "../portfolio/PieChart";
import { getPieData } from "../utils/portfolioServices";
import ActionButton from "../components/ActionButton";

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
  function handleClick() {}

  return (
    <StyledSection>
      <Title size="L">Insights</Title>
      <Title size="S">Your Portfolio:</Title>
      <PieChart pieData={getPieData(totalQuantities, coinData)} />
      <UploadButton onclick={handleClick} />
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
