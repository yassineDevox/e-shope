import React from "react";
import axios from "./../../utils/axios";
import Modal from "./modal";
import FormProduct from './form-product';
import RowProduct from "./row-product";

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      id: "",
      title: "",
      desc: "",
      img: "",
      errorTitle: false,
      errorDesc: false,
      errorImg: false,
    };
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData = ()=>{
    axios.get("/products.json").then((response) => {
      if (response.data != null) {
        let fetchData = [];

        Object.keys(response.data).map((key) => {
          fetchData.push({ ...response.data[key], id: key });
        });

        this.setState({ products: fetchData });
      }
    });
  }
  render() {
    return (
      <section className="col-8">
        <table id="mytable" className="table table-bordred table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>title</th>
              <th>desc</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.length == 0 ? (
              <tr>
                <td className="text-center" colSpan="6">
                  La liste des produits est vide 😥 !!
                </td>
              </tr>
            ) : (
              this.state.products.map((p) => {
                return (
                  <RowProduct 
                  hey={p.id}
                    title={p.title}
                    desc={p.desc}
                    img={p.img}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                  />            
                );
              })
            )}
          </tbody>
        </table>
        {/* modal-edit */}
       <Modal title={this.state.title} id='edit' handleSubmit={this.onUpdateProduct}>
              <FormProduct 
                title={this.state.title}
                img={this.state.img}
                desc={this.state.desc}
                handleInputChange={this.onChangeInput}
              />
       </Modal>
       
            
         
      </section>
    );
  }

  //------------------EVENTS HANDLERS-------------
  handleDelete = (productID) => {
    let confirmDelete = window.confirm("Are You Sure ?");
    if (confirmDelete == true) {
      axios.delete(`/products/${productID}.json`).then((data) => {
        //filtri ga3 les produits li andhom hade lcondition s7i7a ()
        let nvList = this.state.products.filter((p) => p.id != productID);

        this.setState({
          products: nvList,
        });
      });
    }
  };

  handleEdit = (product) => {
    this.setState({
      title: product.title,
      desc: product.desc,
      img: product.img,
      id: product.id,
    });
  };

  //---------EVENTS HANDLERS FOR EDIT FORM
  onChangeInput = (e) => {
    //e.target how element litra3lih event(onChange)
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  };

  onUpdateProduct = (event) => {
    //pour que la page ne s'actualise pas aprse le click
    event.preventDefault();

    this.validateInput(this.state.title, "errorTitle");
    this.validateInput(this.state.desc, "errorDesc");
    this.validateInput(this.state.img, "errorImage");

    let e1 = this.state.title;
    let e2 = this.state.desc;
    let e3 = this.state.img;

    if (e1 != "" && e2 != "" && e3 != "") {
      const Data = {
        title: this.state.title,
        desc: this.state.desc,
        img: this.state.img,
      };
      axios.put(`/products/${this.state.id}.json`, Data).then((data) => {
        //3aw jib list man firebase 3afac 
        this.getAllData();
      });
    }
    console.log(this.state);
  };

  validateInput = (input, KeyError) => {
    if (input == "") this.setState({ [KeyError]: true });
    else this.setState({ [KeyError]: false });
  };
}
