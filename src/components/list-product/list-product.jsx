import React from "react";
import axios from "./../../utils/axios";

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("/products.json").then((response) => {

      if(response.data!=null){
        
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
            {
              this.state.products.length == 0 ? 
              <tr><td className='text-center' colSpan='6'>La liste des produits est vide 😥 !!</td></tr>
              :
            this.state.products.map((p) => {
              return (
                <tr>
                  <td>{p.id}</td>
                  <td>
                    <img height="100" src={p.img} />
                  </td>

                  <td>{p.title}</td>
                  <td>{p.desc}</td>
                  <td>
                    <p data-placement="top" data-toggle="tooltip" title="Edit">
                      <button
                        className="btn btn-primary btn-xs"
                        data-title="Edit"
                        data-toggle="modal"
                        data-target="#edit"
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
            })}
          </tbody>
        </table>
      </section>
    );
  }

  //------------------EVENTS HANDLERS-------------
  handleDelete = (productID) => {
    let confirmDelete = window.confirm("Are You Sure ?");
    if (confirmDelete == true) {
      axios.delete(`/products/${productID}.json`).then((data) => {
        
        //filtri ga3 les produits li andhom hade lcondition s7i7a ()
        let nvList=this.state.products.filter((p) => p.id != productID)
        
        this.setState({
          products: nvList,
        });
      });
    }
  };
}
