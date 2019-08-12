import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/Title";
import PieCharts from "./PieCharts";
import PieChart from "../portfolio/PieChart";
import { getPieData } from "../utils/portfolioServices";
import ActionButton from "../components/ActionButton";
import UploadPopUp from "./UploadPopUp";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledHeadline = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  margin-top: 15px;
  font-size: 28px;
`;

const StyledHr = styled.hr`
  height: 3px;
  width: 90%;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const UploadButton = styled(ActionButton).attrs({
  icon: "fa-upload",
  type: "Upload Portfolio",
  size: "16px"
})`
  font-size: 30px;
  margin-top: 30px;
`;

function InsightsPage({ totalQuantities, coinData }) {
  const [showPopUp, setShowPopUp] = React.useState(null);

  function handleClick() {
    setShowPopUp(true);
  }

  return (
    <StyledSection>
      <Title size="L">Insights</Title>
      <StyledHeadline>Your Portfolio</StyledHeadline>
      <PieChart pieData={getPieData(totalQuantities, coinData)} />
      <UploadButton onClick={handleClick} />
      <StyledHr />
      <PieCharts coinData={coinData} />
      <UploadPopUp
        totalQuantities={totalQuantities}
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
