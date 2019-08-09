import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PieCharts from "./PieCharts";
import PieChart from "../portfolio/PieChart";
import { getPieData } from "../utils/portfolioServices";
import ActionButton from "../components/ActionButton";
import { postPortfolio } from "../services";
import UploadPopUp from "./UploadPopUp";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledHr = styled.hr`
  height: 5px;
  width: 90%;
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
  const [showPopUp, setShowPopUp] = React.useState(null);

  function handleClick() {
    setShowPopUp(true);

    const data = {
      name: "Kevin",
      email: "Kevins@gmx.de",
      date: "12.12.1990",
      data: {
        Bitcoin: 4,
        Ethereum: 20,
        XRP: 12,
        Litecoin: 32
      }
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
      <UploadPopUp
        showPopUp={showPopUp}
        onCancelClick={() => setShowPopUp(false)}
      />
    </StyledSection>
  );
}

InsightsPage.propTypes = {
  totalQuantities: PropTypes.object.isRequired,
  coinData: PropTypes.object.isRequired
};

export default InsightsPage;
