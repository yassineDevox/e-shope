import React from "react";
import AuthUI from "../components/auth/auth-ui";
import AuthContext from "./context/auth-context";

export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      success: "",
      nom: "",
      pren: "",
      avatar: "",
      loading: false,
    };
    // this.handleSignup = this.handleSignup.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }
  render() {
    return (
      <AuthUI
        handleSignup={this.handleSignup}
        handleSignin={this.handleSignin}
        handleChange={this.handleChangeInput}
        errorMSG={this.state.error}
        successMSG={this.state.success}
        isLoading={this.state.loading}
      />
    );
  }

  handleSignup = (event) => {
    event.preventDefault();

    // fields validation part
    console.log(this._validateFieldsOfSignup());

    if (!this._validateFieldsOfSignup()!= null) {
      this.setState({ error: "Signup's values cannot be empty " });
      return;
    }
    //do signup
    const { email, password } = this.state;
    this.setState({ loading: true });
    this.setState({ error: "" });
    this.context
      .signup(email, password)
      .then((_) => {
        this.setState({
          success: "Your Account has been added successfully try to signin",
        });
        this.setState({ loading: false });
      })
      .catch((_) => {
        this.setState({ error: "failed to signup" });
        this.setState({ loading: false });
      });
  };

   handleSignin=(event) =>{
    event.preventDefault();
    if (this.state.email == "" || this.state.password == "") {
      this.setState({ error : "Signin Values Are Empty " });
      return;
    }
    const { email, password } = this.state;
    this.context
      .signup(email, password)
      .then(_ => {
        this.props.history('/admin')
        this.setState({ loading : false });
      })
      .catch(_ => {
        this.setState({ error: "failed to signin " });
        this.setState({ loading : false });
      });
  }

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //--------util functions ----------
  _validateFieldsOfSignup = () => {
    return Object.keys(this.state).find(
      (k) =>
        k != "error" && k != "success" && k != "loading" && this.state[k] == ""
    );
  };
}
//step 6 : pour prendre le cle context pour acceder a AuthProvider
AuthPage.contextType = AuthContext;
