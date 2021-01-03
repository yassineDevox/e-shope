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
    const [currentUser] = this.state;
    const [signin, signup] = this;
    return (
      <AuthProvider value={(currentUser, signin, signup)}>
        {this.props.children}
      </AuthProvider>
    );
  }
  componentDidMount() {
    const unsubscribeMethode = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
    return unsubscribeMethode;
  }
}

export default AuthContext;
