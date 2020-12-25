import React from "react";
import Product from "./product";

export default class ListProduct extends React.Component {
  
   constructor(props) {
    super(props);
    this.products = [
        {
          id: 1,
          img:
            "https://images-eu.ssl-images-amazon.com/images/I/61CLCiCNtaL._AC_UL320_SR320,320_.jpg",
          title: "Xbox 360",
          desc: "Xbox Series X – La Xbox la plus puissante",
        },{
            id: 2,
            img:
              "https://images-eu.ssl-images-amazon.com/images/I/61CLCiCNtaL._AC_UL320_SR320,320_.jpg",
            title: "Xbox 360",
            desc: "Xbox Series X – La Xbox la plus puissante",
          },{
            id: 3,
            img:
              "https://images-eu.ssl-images-amazon.com/images/I/61CLCiCNtaL._AC_UL320_SR320,320_.jpg",
            title: "Xbox 360",
            desc: "Xbox Series X – La Xbox la plus puissante",
          }
      ];

     this.ALL_PRODUCTS =  this.products.map((p) => {
        return <Product key={p.id} img={p.img} title={p.title} desc={p.desc} />;
      });

  }

  render() {
    return (
      <section className="d-flex justify-content-around">
        {this.ALL_PRODUCTS}
      </section>
    );
  }
}
