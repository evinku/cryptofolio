import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/Title";

const StyledSection = styled.section``;

function InsightsPage({ pieData }) {
  console.log(pieData);

  return (
    <StyledSection>
      <Title size="L">Insights</Title>;
    </StyledSection>
  );
}

InsightsPage.propTypes = {
  pieData: PropTypes.object.isRequired
};

export default InsightsPage;
