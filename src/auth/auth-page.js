import React, { Component } from "react";
import AuthContext from "./context/auth-context";
import { auth } from "./../utils/firebase";

import "./auth-page.css";

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
      loading: false,
      avatar: "",
      firstName: "",
      lastName: "",
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
        />{" "}
        <input
          name="firstName"
          type="text"
          className="form-control w-50"
          onChange={this.handleChangeInput}
          placeholder="First Name"
        />{" "}
        <input
          name="lastName"
          type="text"
          className="form-control w-50"
          onChange={this.handleChangeInput}
          placeholder="Last Name"
        />
        <input
          name="avatar"
          type="text"
          className="form-control w-50"
          onChange={this.handleChangeInput}
          placeholder="URL OF YOUR AVATAR "
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
        <div
          className={
            this.state.loading ? "spinner-border text-danger" : "d-none"
          }
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  register = () => {
    this.setState({ error: false, success: false });
    //validation des donnees
    const { email, password, avatar, firstName, lastName } = this.state;

    if (
      email == "" ||
      password == "" ||
      avatar == "" ||
      firstName == "" ||
      lastName == ""
    ) {
      this.setState({ error: true, title: "register empty" });
    } else {
      this.setState({ error: false ,loading: true });

      this.context
        .signup(email, password)
        .then((data) => {
              console.log(data);
              this.setState({ error: false });

             auth.onAuthStateChanged((user)=>{

                user.updateProfile({displayName:firstName+' '+lastName,photoURL:avatar})
                
                .then((_)=>{
                
                  this.setState({a
                    success: true,
                    title:"Your account has been created successfuly 🥰 Plz Signin !!",
                    loading: false,
                  });
               
                },(error)=>{
                    this.setState({error:true,title:error.message,loading:false})  
                })


             })
          ///------------success msg
        })
        .catch((error) => {
          this.setState({ error: true, title: error.message, loading: false });
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
      this.setState({ loading: true });
      this.context
        .signin(email, password)
        .then((data) => {
          this.props.history.push("/admin");
          this.setState({ error: false });
          this.setState({ loading: false });
        })
        .catch((error) => {
          this.setState({ error: true, title: error.message });
          this.setState({ loading: false });
        });
    }
  };

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

AuthPage.contextType = AuthContext;

export default AuthPage;
