import DatePicker from "react-datepicker";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDatePicker = styled(DatePicker)`
  width: 100vw;
  height: 30px;
  font-size: 16px;
  padding: 20px;
  padding-left: 10px;
`;

function PickDate({ onDateChange }) {
  const [date, setDate] = React.useState();

  function handleDateChange(date) {
    setDate(date);
    onDateChange(date);
  }

  function handleClick() {
    setDate(new Date());
  }

  return (
    <StyledDatePicker
      placeholderText="Select date"
      selected={date ? date : null}
      onChange={handleDateChange}
      onclick={handleClick}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={1}
      dateFormat="d MMMM yyyy h:mm aa"
      timeCaption="time"
    />
  );
}

PickDate.propTypes = {
  onDateChange: PropTypes.func
};

export default PickDate;
