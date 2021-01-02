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

  save = (Data) => {
    // console.log('sending data')
    // send the data to the server using axios
    axios.post("/products.json", Data).then((response) => {
      console.log(response);
      let newList = this.state.products;
      newList.push({...Data,id:response.data.name})
      this.setState({products:newList})
    });
  };

  remove = (productID) => {
    axios.delete(`/products/${productID}.json`).then((data) => {
      //filtri ga3 les produits li andhom hade lcondition s7i7a ()
      let nvList = this.state.products.filter((p) => p.id != productID);
      this.setState({
        products: nvList,
      });
    });
  };

  render() {
    const { products } = this.state;
    const { filter, getAll, save , remove } = this;

    return (
      <ProductContext.Provider
        value={{
          products,
          getAll,
          filter,
          save,
          remove
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
export default ProductContext;
