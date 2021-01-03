import React from "react";
import axios from "./../../utils/axios";
import FormProduct from "../../shared/form-product";
import Modal from './../../shared/modal';
import RowProduct from './../../shared/row-product';
import ProductContext from "../../shared/context/product-context";

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
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
   this.context.getAll();
  }
  render() {
    return (
      <section style={{height:'73vh',overflowY:'scroll'}} className="col-8">
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
            {this.context.products.length == 0 ? (
              <tr>
                <td className="text-center" colSpan="6">
                  La liste des produits est vide 😥 !!
                </td>
              </tr>
            ) : (
              this.context.products.map((p) => {
                return (
                  <RowProduct 
                  hey={p.id}
                  id={p.id}
                    title={p.title}
                    desc={p.desc}
                    img={p.img}
                    handleDelete={()=> this.handleDelete(p.id)}
                    handleEdit={()=> this.handleEdit(p)}
                  />            
                );
              })
            )}
          </tbody>
        </table>
        {/* modal-edit */}
       <Modal title={this.state.title} id='edit' handleSubmit={this.onUpdateProduct} submitBtn='Edit' submitIcon='edit'>
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
     this.context.remove(productID)
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

ListProduct.contextType = ProductContext;