import React from "react";

const ShoppingCardContext = React.createContext();

export class ShoppingCardProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingCardList: [],
    };
  }

  addToCard = () => {};
  removeFromCard = () => {};
  clearCard = () => {};

  render() {

    const { shoppingCardList } = this.state;
    const { addToCard, removeFromCard, clearCard } = this;

    const value = {
      shoppingCardList,
      addToCard,
      removeFromCard,
      clearCard
    };
    
    return <ShoppingCardContext value={value}> {this.props.children}</ShoppingCardContext>;
  }
}

export default ShoppingCardContext;
