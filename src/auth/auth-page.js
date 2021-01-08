import React from "react";
import Auth from "../components/auth/auth";
import AuthContext from "./context/aut-context";

export default class AuthPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleSignup = this.handleSignup.bind(this);
    
  }
  render() {
    console.log(this.context);
    
    return (
      <Auth
        handleSignup={this.handleSignup}
        handleChange={this.handleChangeInput}
      />
    );
  }
  async handleSignup(e) {

    e.preventDefault();

    if (this.state.email == "" || this.state.password == "") return;

    try {
      const { email, password } = this.state;
      await this.context.signup(email, password);
    } catch (error) {
      console.log(error);
    }
  }
  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

AuthPage.contextType = AuthContext;
