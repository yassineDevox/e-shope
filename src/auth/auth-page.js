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
    if(!this._validateFieldsOfSignup){
      this.setState({error:"Signup's values cannot be empty "})
      return
    }
    //do signup
    const { email, password } = this.state;
    this.setState({ loading: true });
    this.setState({error:''});
    this.context
      .signup(email, password)
      .then((_) => {
        this.setState({success:'Your Account has been added successfully try to signin'})
        this.setState({ loading: false });
      })
      .catch((_) => {
        this.setState({error:'failed to signup'})
        this.setState({ loading: false });
      });
  };

  async handleSignin(event) {
    event.preventDefault();
    if (this.state.email == "" || this.state.password == "") {
      this.setState({ error: "Signin Values Are Empty " });
      return;
    }

    try {
      const { email, password } = this.state;
      await this.context.signin(email, password);
      this.props.history.push("/admin/categories");
    } catch {
      this.setState({ error: "failed to signin" });
    }
  }

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //--------util functions ----------
  _validateFieldsOfSignup = () => {
    Object.keys(this.state).map((k) => {
      if (
        k != "error" &&
        k != "success" &&
        k != "loading" &&
        this.state[k] == ""
      ) {
        return false
      }
    });
    return true;
  };
}
//step 6 : pour prendre le cle context pour acceder a AuthProvider
AuthPage.contextType = AuthContext;
