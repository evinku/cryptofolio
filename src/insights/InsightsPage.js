import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/Title";

const StyledSection = styled.section``;

function InsightsPage({ pieData }) {
  console.log(pieData);

  return <Title size="L">Insights</Title>;
}

InsightsPage.propTypes = {
  pieData: PropTypes.object.isRequired
};

export default InsightsPage;
