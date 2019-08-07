import React from "react";
import styled from "styled-components";
import ActionButton from "../components/ActionButton";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import PickDate from "./PickDate";
import DropdownMenu from "./DropdownMenu";
const uuidv1 = require("uuid/v1");

const BuyButton = styled(ActionButton).attrs({
  icon: "fa-smile-beam",
  type: "Buy",
  size: "20px"
})`
  font-size: 50px;
  color: green;
`;

const SellButton = styled(ActionButton).attrs({
  icon: "fa-sad-cry",
  type: "Sell",
  size: "20px"
})`
  font-size: 50px;
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
  height: 75vh;
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

function checkTransaction(coin, currentQuantity, quantity, type) {
  if (type === "buy") {
    return false;
  }
  if (currentQuantity[coin] === undefined) {
    return true;
  }
  if (currentQuantity[coin] < quantity) {
    return true;
  } else return false;
}

function Form({
  history,
  onSubmit,
  coinOptions,
  totalQuantities,
  coinDataNormalized
}) {
  const [formData, setFormData] = React.useState({
    id: uuidv1(),
    coin: "",
    price: "",
    quantity: "",
    date: ""
  });

  const [errors, setErrors] = React.useState({});

  function validate(type) {
    const errors = {};

    if (
      checkTransaction(formData.coin, totalQuantities, formData.quantity, type)
    ) {
      errors.checkTransaction = "You can't sell more than you own";
    }
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
      id: uuidv1(),
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
    setErrors({});
    const errors = validate(type);
    if (errors) {
      setErrors(errors);
      return;
    }
    onSubmit({ ...formData, type });
    resetForm();
    setErrors({});

    history.push("/all-transactions");
  }

  function handleDateChange(newDate) {
    setFormData({ ...formData, date: newDate.toISOString() });
  }

  function handleDropdownChange(dropdownValue) {
    setFormData({
      ...formData,
      coin: dropdownValue,
      price: coinDataNormalized[dropdownValue].current_price.toString()
    });
  }

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
        {errors.checkTransaction && (
          <StyledError>{errors.checkTransaction}</StyledError>
        )}
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
  coinOptions: PropTypes.array,
  history: PropTypes.object,
  totalQuantities: PropTypes.object,
  coinDataNormalized: PropTypes.object
};

export default Form;
