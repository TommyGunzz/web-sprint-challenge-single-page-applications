import React from "react";
import { Route, Link } from "react-router-dom";
import pizza from "../images/Pizza.jpg";
import styled from "styled-components";

const TrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3%;
color: #3d040b;
`;

const Tracker = () => {

   
  return (
    <>
    <Route>
        <FormHeader>
        <h2>Track Your Order!</h2>
        <div className="home-button">
          <Link to="/">
            <button>Home</button>
          </Link>
          
          <Link to="/pizza-form/"><button>Edit Order
          </button>
        </Link>
        </div>
      </FormHeader>
    </Route>
      <TrackerContainer>
        <h2>Sorry...your Card has been declined, please call your local Lambda Eats for cash delivery, No Contact Pizza.. 0 Calories.</h2>
        <img alt="delicious-pizza" className="pizza-hero" src={pizza} />
      </TrackerContainer>
    </>
  );
};
export default Tracker;
