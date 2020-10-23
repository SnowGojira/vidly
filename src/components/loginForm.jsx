import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {login} from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().trim().required().label("Username"),
    password: Joi.string().trim().required().label("Password"),
  };

  doSubmit = async () => {
    //call server
    const{username,password} = this.state.data;

    try{
      const {data:token} = await login(username,password);
      localStorage.setItem('token',token);
      window.location="/";
    }catch(err){
      if(err.response && err.response.status === 400){
        const errors = {...this.state.errors};
        errors.username = err.response.data;
        this.setState({errors});
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSubmitButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
