import React from "react";
import axios from './../utils/axios';

const ShoppingCardContext = React.createContext();

export class ShoppingCardProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCardList: [],
    };
  }

  addToCard = (selectedProduct) => {

    //test if the selectedProduct exist or not
    let productFound = this.state.shoppingCardList.find(
      (p) => p.idProduct== selectedProduct.id
    );

    let newShoppingCardList = this.state.shoppingCardList;

    if (productFound != null) {
     

      productFound.quantity+=1;
      axios.put('/shopingCards/'+productFound.id+'.json',{...productFound}).then(
        ()=>{
          this.getShoppingCardList();
        }
      )

    } else {

      let shopingCardItem = {
        title : selectedProduct.title,
        idProduct: selectedProduct.id,
        quantity:1
      }

      axios.post('/shopingCards.json',{...shopingCardItem}).then(
        ()=> this.getShoppingCardList()
      )

      

    }

    this.setState({shoppingCardList:newShoppingCardList});
    
  };

  componentDidMount = ()=>{
    this.getShoppingCardList();
  }

  getShoppingCardList = ()=>{

    axios.get('/shopingCards.json').then((resp)=>{

        if(resp.data!=null){
            let fetcheData =[];
            Object.keys(resp.data).map((key)=>{
                fetcheData.push({...resp.data[key] ,id:key})
            })
            this.setState({shoppingCardList:fetcheData})
        }
    })
  }


  render() {
    const { shoppingCardList } = this.state;
    const { addToCard } = this;

    const value = {
      shoppingCardList,
      addToCard,
    };

    return (
      <ShoppingCardContext.Provider value={value}>
        {this.props.children}
      </ShoppingCardContext.Provider>
    );
  }
}

export default ShoppingCardContext;
