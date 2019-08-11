import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";

const CancelButton = styled(ActionButton).attrs({
  icon: "fa-window-close",
  type: "Cancel",
  size: "16px",
  color: "white"
})`
  font-size: 40px;
  background: rgba(50, 90, 133, 1);
  color: white;
`;

const SendButton = styled(ActionButton).attrs({
  icon: "fa-share-square",
  type: "Send",
  size: "16px",
  color: "white"
})`
  color: white;
  font-size: 40px;
  background: rgba(50, 90, 133, 1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  top: 195px;
  width: 95%;
  height: 250px;
  align-self: center;
  background-color: black;
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(2, 48, 101, 1) 20%,
    rgba(44, 99, 144, 1) 84%
  );
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 15px;
  padding: 20px;
  padding-left: 10px;
  margin-bottom: 25px;
  border-radius: 10px;
`;

const StyledGroup = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;

function UploadPopUp({ showPopUp, onCancelClick }) {
  if (showPopUp) {
    return (
      <StyledForm>
        <StyledInput placeholder="Your Name" />
        <StyledInput placeholder="Your Email" />
        <StyledGroup>
          <CancelButton onClick={() => onCancelClick()} />
          <SendButton />
        </StyledGroup>
      </StyledForm>
    );
  }
  return null;
}

export default UploadPopUp;
