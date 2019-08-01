import React from "react";
import styled from "styled-components";
import ActionButton from "../components/ActionButton";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import PickDate from "./PickDate";
import DropdownMenu from "./DropdownMenu";

const BuyButton = styled(ActionButton).attrs({
  icon: "fa-smile-beam",
  type: "Buy"
})`
  font-size: 60px;
  color: green;
`;

const SellButton = styled(ActionButton).attrs({
  icon: "fa-sad-cry",
  type: "Sell"
})`
  font-size: 60px;
  color: crimson;
`;

const ButtonGroup = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const AddTransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
`;

const StyledDescription = styled.h2`
  margin: 0;
  margin-bottom: 2px;
`;

const StyledError = styled.div`
  color: crimson;
`;

function Form({ history, onSubmit, coinOptions }) {
  const [formData, setFormData] = React.useState({
    coin: "",
    price: "",
    quantity: "",
    date: ""
  });

  const [errors, setErrors] = React.useState({});

  function validate() {
    const errors = {};

    if (formData.quantity.trim() === "") {
      errors.quantity = "Please add a quantity";
    }
    if (formData.price.trim() === "") {
      errors.price = "Please add a price";
    }
    if (formData.coin.trim() === "") {
      errors.coin = "Please choose a coin";
    }
    if (formData.date.trim() === "") {
      errors.date = "Please choose a date";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function resetForm() {
    setFormData({
      coin: "",
      price: "",
      quantity: "",
      date: ""
    });
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event, type) {
    event.preventDefault();

    const errors = validate();
    if (errors) {
      setErrors(errors);
      return;
    }
    onSubmit({ ...formData, type });
    resetForm();
    setErrors({});

    history.push("/all_transactions");
  }

  function handleDateChange(newDate) {
    setFormData({ ...formData, date: newDate.toISOString() });
  }

  function handleDropdownChange(dropdownValue) {
    setFormData({ ...formData, coin: dropdownValue });
  }

  console.log(formData);

  return (
    <AddTransactionForm>
      <div>
        <StyledDescription>Coin:</StyledDescription>
        <DropdownMenu
          coinOptions={coinOptions}
          onDropdownChange={handleDropdownChange}
        />
        {errors.coin && <StyledError>{errors.coin}</StyledError>}
      </div>
      <div>
        <StyledDescription>Date:</StyledDescription>
        <PickDate onDateChange={handleDateChange} />
        {errors.date && <StyledError>{errors.date}</StyledError>}
      </div>
      <div>
        <StyledDescription>Price:</StyledDescription>
        <StyledInput
          type="number"
          value={formData.price}
          onChange={handleChange}
          name="price"
          placeholder="Price in $"
        />
        {errors.price && <StyledError>{errors.price}</StyledError>}
      </div>
      <div>
        <StyledDescription>Quantity:</StyledDescription>
        <StyledInput
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          name="quantity"
          placeholder="Quantity"
        />
        {errors.quantity && <StyledError>{errors.quantity}</StyledError>}
      </div>
      <ButtonGroup>
        <BuyButton onClick={event => handleSubmit(event, "buy")} />
        <SellButton onClick={event => handleSubmit(event, "sell")} />
      </ButtonGroup>
    </AddTransactionForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  coinOptions: PropTypes.array
};

export default Form;
