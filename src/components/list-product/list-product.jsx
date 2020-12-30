import React from "react";
import axios from "./../../utils/axios";

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
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>
                      <img height="100" src={p.img} />
                    </td>

                    <td>{p.title}</td>
                    <td>{p.desc}</td>
                    <td>
                      <p
                        data-placement="top"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        <button
                          className="btn btn-primary btn-xs"
                          data-title="Edit"
                          data-toggle="modal"
                          data-target="#edit"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => this.handleEdit(p)}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                      </p>
                    </td>
                    <td>
                      <p
                        data-placement="top"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        <button
                          onClick={() => this.handleDelete(p.id)}
                          className="btn btn-danger btn-xs"
                          data-title="Delete"
                          data-toggle="modal"
                          data-target="#delete"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </p>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        {/* modal-edit */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* add form for update product */}
                <form onSubmit={this.onAddProduct} className="flex-grow-1">
                  <div className="mb-3 text-center">
                    <label htmlFor="t" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="t"
                      onChange={this.onChangeInput}
                      name="title"
                      value={this.state.title}
                    />
                    {/* etape deux  render la className dynamique en se basant sur la valeur du variable error */}
                    <small
                      className={
                        this.state.errorTitle == true
                          ? "text-danger d-block"
                          : "d-none"
                      }
                    >
                      Title is required !!
                    </small>
                  </div>

                  <div className="mb-3 text-center">
                    <label htmlFor="d" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="d"
                      onChange={this.onChangeInput}
                      name="desc"
                      value={this.state.desc}
                    ></textarea>

                    <small
                      className={
                        this.state.errorDesc == true
                          ? "text-danger d-block"
                          : "d-none"
                      }
                    >
                      Description is required !!
                    </small>
                  </div>

                  <div className="text-center">
                    <label htmlFor="i" className="form-label">
                      Image
                    </label>
                    <div className="input-group ">
                      <span className="input-group-text">URL:/</span>
                      <input
                        type="text"
                        className="form-control"
                        id="i"
                        onChange={this.onChangeInput}
                        name="img"
                        value={this.state.img}
                      />
                    </div>
                    <small
                      className={
                        this.state.errorImg == true
                          ? "text-danger d-block"
                          : "d-none"
                      }
                    >
                      Image is required !!
                    </small>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                
                <button
                  data-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onUpdateProduct}
                >
                  Edit <i className="fa fa-edit"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
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
