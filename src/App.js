import React, { useState, useEffect } from "react";
import "./App.css";
import NewForm from "./components/Form";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza-tracker">
          <Tracker />
        </Route>
        <Route path="/pizza-form">
          {" "}
          <PizzaForm />
        </Route>
        <Route path="/">
          <PizzaHome />
        </Route>
      </Switch>
    </>
  );
};
export default App;
