import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";

const CancelButton = styled(ActionButton).attrs({
  icon: "fa-window-close",
  type: "",
  size: "16px"
})`
  font-size: 35px;
  width: 35px;
  height: 35px;
  background-color: white;
`;

const StyledForm = styled.form`
  position: absolute;
  border-radius: 10px;
  top: 50px;
  width: 300px;
  height: 300px;
  align-self: center;
  background-color: crimson;
  opacity: 0.8;
`;

function UploadPopUp({ showPopUp, onCancelClick }) {
  if (showPopUp) {
    return (
      <StyledForm>
        <CancelButton onClick={() => onCancelClick()} />
      </StyledForm>
    );
  }
  return null;
}

export default UploadPopUp;
