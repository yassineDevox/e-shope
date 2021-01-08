import React from "react";
import {auth} from "../../utils/firebase";

const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
    this.unsubscribeMethode=()=>{}
  }
  signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  componentDidMount() {
    this.unsubscribeMethode = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  render() {
    const { currentUser } = this.state;
    const { signup } = this;

    return (
      <AuthContext.Provider value={{currentUser, signup}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
  componentWillUnmount() {
    this.unsubscribeMethode();
  }
}

export default AuthContext;
