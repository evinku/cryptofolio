import DatePicker from "react-datepicker";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDatePicker = styled(DatePicker)`
  width: 100vw;
  font-size: 16px;
  padding: 8px 10px 8px 10px;
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
      onClick={handleClick}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={1}
      dateFormat="d MMMM yyyy h:mm aa"
      timeCaption="time"
      maxDate={new Date()}
    />
  );
}

PickDate.propTypes = {
  onDateChange: PropTypes.func
};

export default PickDate;
