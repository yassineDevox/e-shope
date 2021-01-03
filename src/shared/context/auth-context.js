import React from "react";
import { auth } from "../../utils/firebase";

const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
    };
  }
  signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  signin = () => {};
  render() {
    const {currentUser} = this.state;
    const {signup} = this;
    return (
      <AuthContext.Provider value={{currentUser, signup}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
  componentDidMount() {
    this.unsubscribeMethode = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount(){
    return this.unsubscribeMethode;
  }
}

export default AuthContext;
