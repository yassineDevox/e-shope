import React from "react";
import AuthUI from "../components/auth/auth-ui";
import AuthContext from "./context/auth-context";

export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error:"",
      success:"",
      nom:"",
      pren:"",
      avatar:""
    };
    // this.handleSignup = this.handleSignup.bind(this);
    // this.handleSignin = this.handleSignin.bind(this);
    
  }
  render() {
    //step 7 utilisatiorn des fonctions et aussi la partie data de AuthProvider
    console.log(this.context.currentUser)
    return (
      <AuthUI
        handleSignup={this.handleSignup}
        handleSignin={this.handleSignin}
        handleChange={this.handleChangeInput}
        errorMSG={this.state.error}
        successMSG={this.state.success}
      />
     
    );
  }

  handleSignup = (event)=>{

    event.preventDefault();

    if(this.state.email=='' || this.state.password==''){
      this.setState({error:'Signup Values Are Empty '})
      return 
    }
    
    const {email,password} = this.state;

    //appeler la fonction sinup man context 
    this.context.signup(email,password)


  }

  handleSignin = (event) =>{
    
    event.preventDefault();
    if(this.state.email=='' || this.state.password==''){
      this.setState({error:'Signin Values Are Empty '})
      return 
    }
    
    const {email,password} = this.state;
    this.context.signin(email,password);
    this.props.history.push('/admin/categories')

  }
 

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}
//step 6 : pour prendre le cle context pour acceder a AuthProvider
AuthPage.contextType = AuthContext;
