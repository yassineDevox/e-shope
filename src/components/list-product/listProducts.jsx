import React from "react";
import axios from "../../utils/axios";
import RowProduct from './row-product';
import './list-product.css';

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };

  }

  render() {
    return (
      <section className="col-8 d-flex justify-content-around add-scroll">
        <RowProduct listProducts = {this.state.products} />
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
