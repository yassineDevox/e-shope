import React from "react";
import Product from "./product";
import axios from "../../utils/axios";

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <section className="d-flex justify-content-around">
        {
          this.state.products.map((p) => {
            return (
              <Product key={p.id} title={p.title} img={p.img} desc={p.desc} />
            );
          })
        }
      </section>
    );
  }

  componentDidMount = () => {
    this._getAllProducts();
  };

  _getAllProducts = () => {
    axios.get("/products.json").then((response) => {
      let fetchData = [];
      Object.keys(response.data).map((key) => {
        fetchData.push({ ...response.data[key], id: key });
      });

      this.setState({ products: fetchData });
    });
  };
}
