import React, { Component } from "react";
import AuthContext from "./context/auth-context";
import './auth-page.css'

export class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      error1: false,
      title: "",
      success: false,
      loading:false
    };
  }

  render() {
    return (
      <div className="container p-5">
        <input
          name="email"
          type="email"
          className="form-control w-50"
          onChange={this.handleChangeInput}
          placeholder="email"
        />
        <input
          name="password"
          type="password"
          className="form-control w-50"
          onChange={this.handleChangeInput}
          placeholder="password"
        />
        <button className="btn btn-primary m-5" onClick={this.register}>
          signup
        </button>
        <button className="btn btn-primary m-5" onClick={this.login}>
          signin
        </button>

        <p className={this.state.error ? "alert alert-danger" : "d-none"}>
          {this.state.title}
        </p>
        <p className={this.state.success ? "alert alert-success" : "d-none"}>
          {this.state.title}
        </p>
        <div className={this.state.loading ? "spinner-border text-danger":'d-none'} >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  register = () => {
    this.setState({ error: false, success: false });
    //validation des donnees
    const { email, password } = this.state;

    if (email == "" || password == "") {
      this.setState({ error: true, title: "register empty" });
    } else {
      this.setState({ error: false });

      this.setState({loading:true})

      this.context
        .signup(email, password)
        //account was created successfuly
        .then((data) => {
          console.log(data);
          this.setState({ error: false });
          this.setState({
            success: true,
            title: "Your account has been created successfuly 🥰 Plz Signin !!",  
            loading:false
          });
        })
        .catch((error) => {
          this.setState({ error: true, title: error.message ,loading:false});
        });
    }
  };

  login = () => {
    this.setState({ error: false, success: false });

    //validation des donnees
    const { email, password } = this.state;

    if (email == "" || password == "") {
      this.setState({ error: true, title: "login empty" });
    } else {

      this.setState({loading:true})
      this.context
        .signin(email, password)
        .then((data) => {
          this.props.history.push("/admin");
          this.setState({ error: false });
          this.setState({loading:false})
        })
        .catch((error) => {
          this.setState({ error: true, title: error.message });
          this.setState({loading:false})
        });
    }
  };

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

AuthPage.contextType = AuthContext;

export default AuthPage;
