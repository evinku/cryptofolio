import DatePicker from "react-datepicker";
import React from "react";
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  padding: 5px;
`;

function PickDate({ onDateChange }) {
  const [date, setDate] = React.useState(new Date());

  function handleDateChange(date) {
    setDate(date);
    onDateChange(date);
  }

  return (
    <StyledDatePicker
      selected={date}
      onChange={handleDateChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={5}
      dateFormat="d MMMM yyyy h:mm aa"
      timeCaption="time"
    />
  );
}

export default PickDate;
