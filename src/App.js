import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/notfound" component={NotFound} />
        {/* <Route path="/" exact /> */}
        <Redirect from="/" to="/movies" exact />
        <Redirect to="/notfound" />
      </Switch>
    </main>
  );
}

export default App;
