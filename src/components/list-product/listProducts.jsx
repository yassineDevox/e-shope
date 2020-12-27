import React from "react";
import axios from "../../utils/axios";
import RowProduct from "./row-product";
import "./list-product.css";
import swal from "sweetalert";
import Modal from "../shared/modal/modal";

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      updatedProduct: {},
    };
  }

  render() {
    return (
      <section className="col-8 d-flex justify-content-around add-scroll">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase">
                #
              </th>
              <th scope="col" className="text-uppercase">
                img
              </th>
              <th scope="col" className="text-uppercase">
                title
              </th>
              <th scope="col" className="text-uppercase">
                description
              </th>
              <th scope="col" className="text-uppercase">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p) => {
              return (
                <RowProduct
                  key={p.id}
                  title={p.title}
                  desc={p.desc}
                  img={p.img}
                  handleDelete={() => this.onDeleteProduct(p.id)}
                  handleUpdate={() => this.onUpdateProduct(p)}
                />
              );
            })}
          </tbody>
        </table>
        <Modal
          p={this.state.updatedProduct}
          onUpdateProduct={this._updateProduct}
          onChangeInput={this.onChangeInput}
        />
      </section>
    );
  }

  onChangeInput=(e)=>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState((s)=>{
      s.updatedProduct[name]=value;
      return s;
    })
  }
  onDeleteProduct = (id) => {
    // localStorage.setItem('deleted-product-id',id);
    // this.setState({show:true})
    swal("Are You Sure to delete the product ?", {
      buttons: {
        cancel: "Cancel",
        catch: {
          text: "OK",
          value: "d",
        },
      },
    }).then((value) => {
      switch (value) {
        case "d":
          {
            axios.delete("/products/" + id + ".json").then((data) => {
              swal("Gotcha!", "deleted successfully!", "success");
              this.setState({
                products: this.state.products.filter((p) => p.id != id),
              });
            });
          }
          break;

        default:
          swal("Go away safely!");
      }
    });
  };

  onUpdateProduct = (p) => {
    this.setState({ updatedProduct: p });
  };
  _updateProduct = (e) => {
    e.preventDefault();

    axios.put('/products/'+this.state.updatedProduct.id+'.json',this.state.updatedProduct).then((data)=>{
      this._getAllProducts();
      swal("Gotcha!", "updated successfully!", "success");
      
    })

  };

  componentDidMount = () => {
    this._getAllProducts();
  };

  _getAllProducts = () => {
    axios.get("/products.json").then((response) => {
      let fetchData = [];
      Object.keys(response.data).map((key) => {
        fetchData.push({ ...response.data[key], id: key });
      });

      this.setState({ products: fetchData });
    });
  };
}
