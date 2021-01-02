import React from "react";
import axios from "../../utils/axios";
const ProductContext = React.createContext();
export class ProductProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      backupList: [],
    };
  }

  getAll = () => {
    axios.get("/products.json").then((response) => {
      if (response.data != null) {
        let fetchedData = [];
        Object.keys(response.data).map((key) =>
          fetchedData.push({ ...response.data[key], id: key })
        );
        this.setState({ products: fetchedData });
        this.setState({ backupList: fetchedData });
      }
    });
  };

  filter = (query) => {
    if (query != "")
      this.setState({
        products: this.state.backupList.filter((p) =>
          p.title.toLowerCase().includes(query)
        ),
      });
    else
      this.setState(
        (currentState) => (currentState.products = currentState.backupList)
      );
  };

  render() {
    const { products } = this.state;
    const { filter, getAll } = this;

    return (
      <ProductContext.Provider
        value={{
          products,
          getAll,
          filter
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
export default ProductContext;
