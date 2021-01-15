import React, { Component } from "react";
import ShoppingCardContext from "../../shared/shopping-card-context";
import axios from "../../utils/axios";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      listProducts: [],
    };
  }
  render() {
    return (
      <div>
        <header className="p-5 border border-dark">
          <button className="btn btn-dark">
            <i className="fa fa-shopping-basket mr-3"></i>
            <span className="badge badge-danger">
              {this.context.shoppingCardList.length}
            </span>
          </button>
        </header>
        <div className="container p-5">
            <ul>
            {
                this.state.listProducts.map((p)=>{
                    return(
                        
                      <li key={p.id}>
                          <span>{p.title}</span>
                          <button
                          className="btn btn-warning m-5"
                          onClick={()=>this.handleAddToCard(p)}
                        >
                          
                          Add Me Please
                        </button>
                      </li>
                    )
                })
            }</ul>
        </div>

         <h1>Add Product</h1>
         <input type="text" name='title' onChange={this.handleChangeInput}/>   
         <button className="btn btn-success" onClick={this.handleNewProduct}>NEW PRODUCT</button>
      </div>
    );
  }


  ///---cycle functions 
  componentDidMount = ()=>{
  this.getAllData();
  }

  getAllData = ()=>{
    axios.get('/products.json').then((resp)=>{

        if(resp.data!=null){
            let fetcheData =[];
            Object.keys(resp.data).map((key)=>{
                fetcheData.push({...resp.data[key],id:key})
            })
            this.setState({listProducts:fetcheData})
        }
    })
  }
  ///-------events functions 

  handleAddToCard = (p) => {
    this.context.addToCard(p);
  };
  handleChangeInput = (e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  handleNewProduct = ()=>{
    axios.post('/products.json',{title:this.state.title}).then((_)=>this.getAllData())     
  }
}
HomePage.contextType = ShoppingCardContext;
