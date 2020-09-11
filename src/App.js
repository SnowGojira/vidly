import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Redirect from="/" to="/movies" />
      </Switch>
    </main>
  );
}

export default App;
