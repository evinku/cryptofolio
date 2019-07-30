import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";

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

function Form({ onClick }) {
  const [formData, setFormdata] = React.useState({
    coin: "",
    price: "",
    quantity: "",
    date: ""
  });

  function handleChange(event) {
    setFormdata({ ...formData, [event.target.name]: event.target.value });
  }
  function handleBuyClick(event) {
    event.preventDefault();
    formData.type = "buy";
    onClick(formData);
  }

  function handleSellClick(event) {
    event.preventDefault();
    formData.type = "sell";
    onClick(formData);
  }

  return (
    <AddTransactionForm onSubmit={handleBuyClick}>
      <StyledInput
        onChange={handleChange}
        name="coin"
        placeholder="Choose your Coin"
      />
      <StyledInput
        onChange={handleChange}
        name="date"
        placeholder="Date (Format: YYYY-MM-DD)"
      />
      <StyledInput
        onChange={handleChange}
        name="price"
        placeholder="Price in $"
      />
      <StyledInput
        onChange={handleChange}
        name="quantity"
        placeholder="Quantity"
      />
      <ButtonGroup>
        <BuyButton onClick={handleBuyClick} />
        <SellButton onClick={handleSellClick} />
      </ButtonGroup>
    </AddTransactionForm>
  );
}

export default Form;
