import React from "react";
import CardProduct from "../../shared/card-product";
import ProductContext from "../../shared/context/product-context";

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return this.context.products.length == 0 ? (
      <div className="d-flex justify-content-center">
        <span> loading ... 🥰</span>
      </div>
    ) : (
      <section className="w-100 d-flex flex-wrapd justify-content-around">
        {this.context.products.map((p) => {
          return <CardProduct key={p.id} {...p} />;
        })}
      </section>
    );
  }
  //------life cycle hooks ---
  componentDidMount() {
    this.context.getAll();
  }

  //--------private functions -------------
}

Home.contextType = ProductContext;
