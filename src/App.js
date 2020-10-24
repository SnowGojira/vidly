import React ,{Component} from "react";
import "./App.css";
import Movies from "./components/movies";
import Logout from "./components/logout";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/authService";


class App extends Component {
  state={user:null}

  componentDidMount(){
    const user = auth.getCurrentUser();
    this.setState({user});
  }
  
  render(){
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={this.state.user}/>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}
}

export default App;
