import React from "react";
import "./styles.css";
import { APIContextProvider } from "./apiContext";
import Users from "./Users";

export default function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <h1>Hello Stack Overflow</h1>
        <Users />
      </div>
    </APIContextProvider>
  );
}
