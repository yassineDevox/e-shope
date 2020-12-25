import React from "react";
import axios from "../utils/axios";

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
      errorImage: false,
    };
  }
  //partie UI (user interface html )
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="t" className="form-label">
            TItle
          </label>
          <input
            type="text"
            className="form-control"
            id="t"
            onChange={this.onChangeTitle}
          />
          {/* etape deux  render la className dynamique en se basant sur la valeur du variable error */}
          <small
            className={
              this.state.errorTitle == true ? "text-danger d-block" : "d-none"
            }
          >
            {" "}
            Title is required !!
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="d" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="d"
            onChange={this.onChangeDesc}
          ></textarea>

          <small
            className={
              this.state.errorDesc == true ? "text-danger d-block" : "d-none"
            }
          >
            {" "}
            Description is required !!
          </small>
        </div>

        <div>
          <label htmlFor="i" className="form-label">
            Image
          </label>
          <div className="input-group ">
            <span className="input-group-text">
              https://example.com/images/
            </span>
            <input
              type="text"
              className="form-control"
              id="i"
              onChange={this.onChangeImage}
            />
          </div>
          <small
            className={
              this.state.errorImage == true ? "text-danger d-block" : "d-none"
            }
          >
            {" "}
            Image is required !!
          </small>
        </div>

        <button
          type="submit"
          className="btn btn-success mt-3"
          onClick={this.onAddProduct}
        >
          Add Product
        </button>
      </form>
    );
  }
  //event.target l'objet sur le quel en applique l'evenement
  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  //event.target l'objet sur le quel en applique l'evenement
  onChangeDesc = (event) => {
    this.setState({ desc: event.target.value });
  };

  //event.target l'objet sur le quel en applique l'evenement
  onChangeImage = (event) => {
    this.setState({ img: event.target.value });
  };

  onAddProduct = (event) => {
    //pour que la page ne s'actualise pas apres le click
    event.preventDefault();

    //etape 3 changer la valeur de error si title est vide
    if (this.state.title == "") this.setState({ errorTitle: true });
    else this.setState({ errorTitle: false });

    if (this.state.desc == "") this.setState({ errorDesc: true });
    else this.setState({ errorDesc: false });

    if (this.state.img == "") this.setState({ errorImage: true });
    else this.setState({ errorImage: false });

    //collect the data object 
    const Data = {
      title:this.state.title,
      desc:this.state.desc,
      img:this.state.img,
    }

    //send the data with axios to firebase
    axios.post("/orders.json",Data).then((response)=>{
      console.log(response)
    })
    // console.log(this.state);
  };
}

