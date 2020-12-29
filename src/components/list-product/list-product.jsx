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
     
      //jibliya les keys dyale lobjet data
      let keys = Object.keys(response.data)
      //declarer tableau khawi bach n3amro man ba3d be les objets product
      let fetchedData = [];

      //parcouri liya les keys bach n acceder l value dyal properties dyal lobjet data
      keys.map(k=>
        {
          //declarer wahade produit khawi bach n3Amro be les valeurs 
          let product = {
            id:k,
            title:response.data[k].title,
            desc:response.data[k].desc,
            img:response.data[k].img
          }
          //ajouter hadak lproduit ltableau fetchedData
          fetchedData.push(product);

        }
      )
        //tableau 3andi nadi khasni nakhwih fe state products bach it2aficha fe html 
      this.setState({products:fetchedData})  

      console.log(fetchedData); 
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
}
