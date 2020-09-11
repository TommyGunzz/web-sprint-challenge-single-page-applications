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
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
