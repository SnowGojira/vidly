import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {register} from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().email().trim().required().label("Username"),
    password: Joi.string().trim().min(5).required().label("Password"),
    name: Joi.string().trim().required().label("Name"),
  };

  doSubmit = async () => {
    //call server
    try{
      const {headers} = await register(this.state.data);
      auth.loginWithToken(headers["x-auth-token"]);
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
          {this.renderInput("name", "Name")}
          {this.renderSubmitButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
