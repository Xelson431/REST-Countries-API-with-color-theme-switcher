import viteLogo from "/vite.svg";
import Nav from "./components/Nav";
import "./App.css";
import React, { useContext,useState,createContext } from "react";
import Countrylist from "./components/Countrylist";






function App() {
  return (
    <>
      <Nav />
      <Countrylist />
    </>
  );
}

export default App;
