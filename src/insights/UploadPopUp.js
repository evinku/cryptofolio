import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";
import { zoomOut } from "../utils/animations";
import { postPortfolio } from "../services";

const CancelButton = styled(ActionButton).attrs({
  icon: "fa-window-close",
  type: "Cancel",
  size: "16px",
  color: "white"
})`
  font-size: 40px;
  background: transparent;
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
  background: transparent;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  align-self: center;
  border-radius: 10px;
  top: 195px;
  width: 95%;
  height: 250px;
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(2, 48, 101, 1) 20%,
    rgba(44, 99, 144, 1) 84%
  );
  animation: ${zoomOut} 0.8s ease-out;
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

function UploadPopUp({ showPopUp, onCancelClick, totalQuantities }) {
  const [uploadData, setUploadData] = React.useState({
    name: "",
    email: ""
  });

  function handleChange(event) {
    setUploadData({
      ...uploadData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const date = new Date().toISOString();

    const data = { ...uploadData, date, data: totalQuantities };

    postPortfolio(data);
    onCancelClick();
  }

  if (showPopUp) {
    return (
      <StyledForm>
        <StyledInput
          name="name"
          value={uploadData.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <StyledInput
          name="email"
          value={uploadData.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
        <StyledGroup>
          <CancelButton onClick={() => onCancelClick()} />
          <SendButton onClick={handleSubmit} />
        </StyledGroup>
      </StyledForm>
    );
  }
  return null;
}

UploadPopUp.propTypes = {
  showPopUp: PropTypes.bool,
  onCancelClick: PropTypes.func.isRequired
};

export default UploadPopUp;
