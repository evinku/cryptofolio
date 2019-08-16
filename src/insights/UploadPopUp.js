import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ActionButton from "../components/ActionButton";
import { zoomOut } from "../utils/animations";
import { postPortfolio } from "../services";
import { RingLoader } from "react-spinners";

const CancelButton = styled(ActionButton).attrs({
  icon: "fa-window-close",
  description: "Cancel",
  descriptionColor: "white"
})`
  font-size: 40px;
  background: transparent;
  color: white;
`;

const SendButton = styled(ActionButton).attrs({
  icon: "fa-share-square",
  description: "Send",
  descriptionColor: "white"
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
  font-size: 16px;
  padding: 20px;
  margin-bottom: 5px;
  border-radius: 10px;
`;

const StyledGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 80%;
`;

const StyledError = styled.div`
  color: crimson;
  margin: 0;
`;

function UploadPopUp({
  showPopUp,
  onCancelClick,
  totalQuantities,
  onMessageChange
}) {
  const [uploadData, setUploadData] = React.useState({
    name: "",
    email: ""
  });
  const [confirming, setConfirming] = React.useState(false);

  const [errors, setErrors] = React.useState({});

  function validate() {
    const errors = {};

    if (uploadData.email.trim() === "") {
      errors.email = "Please add a valid email";
    }
    if (uploadData.name.trim() === "") {
      errors.name = "Please add a name";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleChange(event) {
    setUploadData({
      ...uploadData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors({});
    const errors = validate();
    if (errors) {
      setErrors(errors);
      return;
    }

    const data = { ...uploadData, data: totalQuantities };

    postPortfolio(data).then(message => onMessageChange(message));

    setConfirming(true);

    setTimeout(function() {
      setConfirming(false);
      onCancelClick();
    }, 1500);
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
        {errors.name && <StyledError>{errors.name}</StyledError>}
        <StyledInput
          name="email"
          value={uploadData.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
        {errors.email && <StyledError>{errors.email}</StyledError>}
        <StyledGroup>
          <CancelButton onClick={() => onCancelClick()} />
          <SendButton onClick={handleSubmit} />
          <RingLoader
            sizeUnit={"px"}
            size={40}
            color={"white"}
            loading={confirming}
          />
        </StyledGroup>
      </StyledForm>
    );
  }
  return null;
}

UploadPopUp.propTypes = {
  showPopUp: PropTypes.bool,
  onCancelClick: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  totalQuantities: PropTypes.object.isRequired
};

export default UploadPopUp;
