import React, { Fragment } from "react";
import CardProduct from "../../shared/card-product";
import ProductContext from "../../shared/context/product-context";
import './home.css';

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    const titleStyle = {
      fontSize: '0.8em',
      fontFamily: 'cursive',
    }
    return (
      <Fragment>
        <div className="d-flex justify-content-center">
          {this.context.products.length == 0 ? (
            <span> loading ... 🥰</span>
          ) : (
            <h2 className='pt-2'> <span style={titleStyle} className='border-bottom border-warning text-uppercase'>shope</span> 🛒</h2>
          )}
        </div>
        <section
          style={{ overflowY: "scroll", height: "70vh", width: "70%" }}
          className="d-flex flex-wrap float-right p-3"
        >
          {this.context.products.map((p) => {
            return <CardProduct key={p.id} {...p} handleClickBtn={()=>this.handleClickAddToCard(p.id)}/>;
          })}
        </section>
      </Fragment>
    );

   
  } 
  handleClickAddToCard=(productId)=>{
    
    this.context.addToCard(productId)
    


  }
  //------life cycle hooks ---
  componentDidMount() {
    this.context.getAll();
  }

  //--------private functions -------------
}

Home.contextType = ProductContext;
