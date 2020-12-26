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
      title: "",
      desc: "",
      img: "",
      errorTitle: false, //etape une ajouter un variable error de type boolean,
      errorDesc: false,
      errorImg: false, //camelcasse hia l7arf lawal majiscule dyal kalma tania
    };
  }
  //partie UI (user interface html )
  render() {
    return (
      <AddProductUI
        title={this.state.title}
        desc={this.state.desc}
        img={this.state.img}
        errorTitle={this.state.errorTitle}
        errorImg={this.state.errorImg}
        errorDesc={this.state.errorDesc}
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
    this.setState({ [name]: value });
  };

  onAddProduct = (event) => {
    //pour que la page ne s'actualise pas apres le click
    event.preventDefault();

    
    //etape 3 changer la valeur de error si title est vide
    this.validateInput(this.state.title, "errorTitle");
    this.validateInput(this.state.desc, "errorDesc");
    this.validateInput(this.state.img, "errorImg");

    let e1 = this.state.title;
    let e2 = this.state.desc;
    let e3 = this.state.img;

    // const { e1, e2, e3 } = this.state.error;

    //! fe blast ==false
    if (e1!="" && e2!="" && e3!="c") {
      //Collect data
      const Data = {
        title: this.state.title,
        desc: this.state.desc,
        img: this.state.img,
      };

      //send the data to the server using axios
      //and get back the data using then method
      axios.post("/products.json", Data).then((data) => {
        console.log(data);
      });
    }
  };

  //input pour indiquer les entrers et aussi la partie error lier avec cet input
  validateInput = (input, keyError) => {
    if (input == "") this.setState({ [keyError]: true });
    else this.setState({ [keyError]: false });
  };
}
