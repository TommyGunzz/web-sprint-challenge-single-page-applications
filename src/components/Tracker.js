import React from "react";
import pizza from "../images/Pizza.jpg";
import styled from "styled-components";

const TrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tracker = () => {
  return (
    <>
      <TrackerContainer>
        <h2>Sorry...your Card has been declined, please call your local Lambda Eats for cash delivery, No Contact Pizza.. 0 Calories.</h2>
        <img alt="delicious-pizza" className="pizza-hero" src={pizza} />
      </TrackerContainer>
    </>
  );
};
export default Tracker;
