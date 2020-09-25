import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
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

  doSubmit = () => {
    //call server
    console.log("submit" + this.state.data);
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
