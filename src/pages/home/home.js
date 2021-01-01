import React from "react";
import axios from "./../../utils/axios";
import CardProduct from "../../shared/card-product";

export default class Home extends React.Component {
  constructor() {
    super();
    //my states
    this.state = {
      products: [],
    };
  }
  render() {
    return (
        this.state.products.length==0 ? 
        
        <div className="d-flex justify-content-center">
            <span> loading ... 🥰</span>
        </div>
        :
        this.state.products.map((p) => {
            return <CardProduct key={p.id} {...p} />;
            }
        )
    )
  }
  //------life cycle hooks ---
  componentDidMount() {
    this._getAllProducts();
  }

  //--------private functions -------------

  _getAllProducts() {
    axios.get("/products.json").then((response) => {
      if (response.data != null) {
        let fetchedData = [];
        Object.keys(response.data).map((key) =>
          fetchedData.push({ ...response.data[key], id: key })
        );
        this.setState({ products: fetchedData });
      }
    });
  }
}
