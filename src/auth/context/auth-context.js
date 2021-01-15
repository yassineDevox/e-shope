import { auth } from './../../utils/firebase'

// step1
import React from "react";
//step2
const AuthContext = React.createContext();

// step1
export class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }
  signup = (email,password) => {
    
     auth.createUserWithEmailAndPassword(email,password);
        
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
    })
  }


  signin = (email,password) => {
    return auth.signInWithEmailAndPassword(email,password);
  };

  logout = () => {
    return auth.signOut();
  };

  // step4
  render() {
    //step 5 mentioner les fonctions et les donnees accessibles par les composants

    const { currentUser } = this.state;

    // const currentUser = this.state.currentUser

    const { signin, signup, logout } = this;

    const value = {
      currentUser,
      signin,
      signup,
      logout,
    };

    return(
      <AuthContext.Provider value={value}>
      {/* laison entre les coposants et le provider step 1 */}
      {this.props.children}
    </AuthContext.Provider>
    )
    
  }
}
// step2
export default AuthContext;
