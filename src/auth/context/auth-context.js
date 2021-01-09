import React from "react";
import { auth } from "../../utils/firebase";

//step 2 : creer context pour acceder a AuthProvider Component
const AuthContext = React.createContext();

//step 1 creer AuthProvider
export class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    //shared data
    this.state = {
      currentUser: {},
    };
  }
  //shared functions
  signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  logout = () => {

    return auth.signOut();

  };

  //step 4 laison entre authContext et AuthProvider
  render() {
    const { currentUser } = this.state;
    const { signup, signin, logout } = this;

    //step 8 passer les donnees avec les fonctions
    const x = {
      currentUser,
      signup,
      signin,
      logout,
    };
    return (
      <AuthContext.Provider value={x}>
        {/* step5 : laison dyale les composants m3a AuthProvider */}
        {this.props.children}
      </AuthContext.Provider>
    );
  }

  componentDidMount = () => {
    //mani 3mar luser
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  };
}
//step 2
export default AuthContext;
