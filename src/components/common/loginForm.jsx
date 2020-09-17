import React, { Component } from "react";
import Input from "./input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //call server
    const { username } = this.state.account;
    console.log(username);
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            onChange={this.handleChange}
            value={account.username}
          />

          <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={account.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
