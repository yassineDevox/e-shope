import React from 'react';
import axios from '../../utils/axios';
const ProductContext = React.createContext();
export class ProductProvider extends React.Component{
    state={
        products:[]
    }
    getAll = ()=>{
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
    render(){
        const {products}  = this.state;
        const {getAll} = this;
        return (
            <ProductContext.Provider value={
                {
                    products,
                    getAll
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
export default ProductContext;