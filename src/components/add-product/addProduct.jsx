import React from "react";
import AddProductUI from "./addProductUI";
import axios from "../../utils/axios";

export default class ProductADD extends React.Component {
  //lors d'initialisation du component
  constructor(props) {
    //passer les attributs (props ) a la classe mere Component
    super(props);
    //class variable error initialised to true because we dont have data inputs for the first time
    this.ERROR = true;
    //definir les variables qui seront actualiser automatiquement dans la partie html
    // this.didupdate=0;
    this.state = {
      // lifeCycle: {
      //   didmount: 0,
      //   didupdate: 0,//it cant be true acctually because the componentDidUpdate it calls after the setState so it just like illimeted loop
      // },
      product: {
        title: "",
        desc: "",
        img: "",
      },
      error: {
        title: false,
        desc: false,
        img: false,
      }, //camelcasse hia l7arf lawal majiscule dyal kalma tania
    };
  }
  //partie UI (user interface html )
  render() {
    return (
      <AddProductUI
        title={this.state.product.title}
        desc={this.state.product.desc}
        img={this.state.product.img}
        errorTitle={this.state.error.title}
        errorImg={this.state.error.img}
        errorDesc={this.state.error.desc}
        onChangeInput={this.onChangeInput}
        onAddProduct={this.onAddProduct}
      />
    );
  }

  //e evenement
  onChangeInput = (e) => {
    let error = {
      title: false,
      desc: false,
      img: false,
    };
    //e.target how element litra3lih event(onChange)
    let value = e.target.value;
    let name = e.target.name;
    //7at liya lvaleur dyal name fel partie key
    this.setState((s) => {
      s.product[name] = value;
      return s;
    });

    this.validateInput(error, name);

    this.setState((s) => {
      s.error[name] = error[name];
      return s;
    });
  };

  onAddProduct = (event) => {
    let error = {
      title: false,
      desc: false,
      img: false,
    };
    //pour que la page ne s'actualise pas apres le click
    event.preventDefault();

    Object.keys(error).map((key) => {
      this.validateInput(error, key);
    });

    console.log(error);

    this.setState({ error: error });

    // if (!this.ERROR) {
    //   this.sendData();
    // }
  };

  sendData = () => {
    //Collect data using spread operator
    const Data = { ...this.state.product };

    // console.log('sending data')
    // send the data to the server using axios
    axios.post("/products.json", Data).then((data) => {
      console.log(data);
    });
  };

  //input pour indiquer les entrers et aussi la partie error lier avec cet input
  validateInput = (error, input) => {
    console.log(this.state, input, this.state.product[input]);
    // console.log(this.state,input,this.state.product[input])
    let err = false;

    if (this.state.product[input] == "") err = true;
    // else this.ERROR=false
    error[input] = err;
    console.log(this.state, input);

    return err;
  };

  //life cycle hooks react
  componentDidMount = () => {
    // this.setState((currentState) => {
    //   currentState.lifeCycle.didmount++;
    //   return currentState;
    // });
  };
  componentDidUpdate = () => {};
}
