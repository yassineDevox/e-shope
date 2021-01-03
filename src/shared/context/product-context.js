import React from "react";
import axios from "../../utils/axios";

const ProductContext = React.createContext();

export class ProductProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      backupList: [],
      shoppingCard: [],
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
      newList.push({ ...Data, id: response.data.name });
      this.setState({ products: newList });
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

  addToCard = (productId) => {
    // alert(productId)
    let productChoosedInTheCard = this.state.shoppingCard.find(
      (p) => p.id == productId
    );
    if (!productChoosedInTheCard) {
      let productChoosed = this.state.products.find((p) => p.id === productId);

      let Data = { ...productChoosed, quantity: 0 };

      axios.post("/shoppingCard.json", Data).then(() => {
        let newShoppingCard = this.state.shoppingCard;
        newShoppingCard.push(Data);
        this.setState({ shoppingCard: newShoppingCard });
      });
    } else {
      productChoosedInTheCard.quantity++;
      axios
        .put(`/shoppingCard/${productId}.json`, productChoosedInTheCard)
        .then((data) => {
          this.setState((prevState) => {
            prevState.shoppingCard.forEach((p) => {
              if (p.id == productId) p.quantity++;
            });
            return prevState;
          });
        });
    }
  };

  getShoppingCard = () => {
    axios.get("/shoppingCard.json").then((response) => {
      console.log(response)
      if (response.data) {
        let fetchedData = [];
        Object.keys(response.data).map((k) =>
          fetchedData.push({ ...response.data[k], idShope: k })
        );
        console.log(fetchedData)
        this.setState({ shoppingCard: fetchedData });
      }
    });
  };

  render() {
    const { products, shoppingCard } = this.state;
    const { filter, getAll, save, remove, addToCard, getShoppingCard } = this;

    return (
      <ProductContext.Provider
        value={{
          products,
          getAll,
          filter,
          save,
          remove,
          addToCard,
          shoppingCard,
          getShoppingCard,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
  componentDidMount = () => {
    this.getShoppingCard();
  };
}
export default ProductContext;
