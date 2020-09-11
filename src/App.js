import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
function App() {
  return (
    <main className="container">
      <NavBar />
      <Movies />
    </main>
  );
}

export default App;
