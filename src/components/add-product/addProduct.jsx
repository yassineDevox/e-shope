import React from "react";
import AddProductUI from "./addProductUI";
import axios from "../../utils/axios";

export default class ProductADD extends React.Component {
  //lors d'initialisation du component
  constructor(props) {
    //passer les attributs (props ) a la classe mere Component
    super(props);

    //definir les variables qui seront actualiser automatiquement dans la partie html
    this.state = {
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
    //e.target how element litra3lih event(onChange)
    let value = e.target.value;
    let name = e.target.name;
    //7at liya lvaleur dyal name fel partie key
    this.setState((currentState) => {
      currentState.product[name] = value;
      //etape 3 changer la valeur de error si title est vide
      Object.keys(currentState.product).map((key) => this.validateInput(key));
      return currentState;
    });
  };

  onAddProduct = (event) => {
    //pour que la page ne s'actualise pas apres le click
    event.preventDefault();

    this.setState((currentState) => {

      //etape 3 changer la valeur de error si title est vide
      Object.keys(currentState.product).map((key) => this.validateInput(key));

      const { title, desc, img } = currentState.error;
      // console.log(currentState.error,title,desc,img);

      // ! fe blast ==false
      if (!title && !desc && !img) {
        //Collect data using spread operator
        const Data = { ...currentState };

        //send the data to the server using axios
        //and get back the data using then method
        axios.post("/products.json", Data).then((data) => {
          console.log(data);
        });
      }
    });
  };

  //input pour indiquer les entrers et aussi la partie error lier avec cet input
  validateInput = (input) => {
    // console.log(this.state,input,this.state.product[input])
    let ERROR = false;

    if (this.state.product[input] == "") ERROR = true;

    this.setState((currentState) => {
      currentState.error[input] = ERROR;
      return currentState;
    });
  };
}
