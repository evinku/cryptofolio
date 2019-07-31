import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import PickDate from "./PickDate";
import DropdownMenu from "./DropdownMenu";

const BuyButton = styled(ActionButton).attrs({
  icon: "fa-smile-beam",
  type: "Buy"
})`
  font-size: 60px;
`;

const SellButton = styled(ActionButton).attrs({
  icon: "fa-sad-cry",
  type: "Sell"
})`
  font-size: 60px;
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
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  padding: 5px;
`;

function Form({ onSubmit, coinOptions }) {
  const [formData, setFormData] = React.useState({
    coin: "",
    price: "",
    quantity: "",
    date: ""
  });

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
    onSubmit({ ...formData, type });
    resetForm();
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
      <DropdownMenu
        coinOptions={coinOptions}
        onDropdownChange={handleDropdownChange}
      />
      <PickDate onDateChange={handleDateChange} />
      <StyledInput
        value={formData.price}
        onChange={handleChange}
        name="price"
        placeholder="Price in $"
      />
      <StyledInput
        value={formData.quantity}
        onChange={handleChange}
        name="quantity"
        placeholder="Quantity"
      />
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
