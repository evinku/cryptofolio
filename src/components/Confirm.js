import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Notifications, { notify } from "react-notify-toast";
import { RingLoader } from "react-spinners";

const API_URL = "https://stark-coast-82137.herokuapp.com";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Confirm({ match }) {
  const [confirming, setConfirming] = React.useState(true);

  const { id } = match.params;

  fetch(`${API_URL}/api/portfolios/confirm/${id}`)
    .then(res => res.json())
    .then(data => {
      setTimeout(function() {
        setConfirming(false);
        notify.show(data.msg);
      }, 2000);
    })
    .catch(err => console.log(err));
  return (
    <>
      <Notifications />
      <StyledDiv>
        <RingLoader
          sizeUnit={"px"}
          size={200}
          color={"rgba(2, 48, 101, 1)"}
          loading={confirming}
        />
      </StyledDiv>
    </>
  );
}

Confirm.propTypes = {
  match: PropTypes.object.isRequired
};

export default Confirm;
