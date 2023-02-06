import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>This is a TODO List app</h1>
      //This is a Git add.
      <Button
        variant="outline-dark"
        style={{ width: "100%" }}
        onClick={() => navigate("create")}
      >
        Home page
      </Button>
    </div>
  );
}
