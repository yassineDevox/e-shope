import React from "react";
import axios from "../../utils/axios";
import FormProduct from "../../shared/form-product";


export default class ProductADD extends React.Component {

  constructor() {
    //call class mother's constructor is require
    super();
    //---class variables
    this.ERROR = true;
    //---states
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
      },
    };
  }
  //partie UI (user interface html )
  render() {
    return (
    <section className='col-4 border-right d-flex align-items-center'>
      
        <FormProduct
            title={this.state.product.title}
            desc={this.state.product.desc}
            img={this.state.product.img}
            errorTitle={this.state.error.title}
            errorImg={this.state.error.img}
            errorDesc={this.state.error.desc}
            handleInputChange={this.onChangeInput}
            handleSubmit={this.onAddProduct}
            save={true}
        />
      
    </section>
    );
  }
  //---------EVENTS HHANDLERS 😁-------------
  onChangeInput = (e) => {
    //e.target how element litra3lih event(onChange)
    let value = e.target.value;
    let name = e.target.name;
    let err = (value=='');

    this.setState((currentState)=>{
      currentState.product[name] = value;
      currentState.error[name]=err;
      return currentState;
    })

  };

  onAddProduct = (event) => {
    let error = {
      title: false,
      desc: false,
      img: false,
    };

    event.preventDefault();

    this.ERROR = this._validateForm(error);
   
    this.setState({ error: error });

    if(!this.ERROR) {
      this._sendData();
      event.target.reset();
    }

    
  };

  //---------PRIVATE FUNCTIONS dima smiat tatbda be _ (for best practices)🛑----------- 
  _sendData = () => {
    //Collect data using spread operator
    const Data = { ...this.state.product };

    // console.log('sending data')
    // send the data to the server using axios
    axios.post("/products.json", Data).then((data) => {
      console.log(data);
    });
  };

  _validateForm = (error)=>{
    let err = false;
    Object.keys(error).map((key) => {
      if(this._validateInput(error, key)==true) err = true;
    });
    return err;
  }
  //input pour indiquer les entrers et aussi la partie error lier avec cet input
  _validateInput = (error, input) => {

    let err = false;

    if (this.state.product[input] == "") err = true;
    
    error[input] = err;

    return err;
  };

}
