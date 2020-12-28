import React from "react";

export default class ListProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          img: "https://placekitten.com/100",
          title: "title 1",
          desc: "description 1 for the product number 1",
        },
        {
          id: 2,
          img: "https://placekitten.com/100",
          title: "title 2",
          desc: "description 2 for the product number 2",
        },
        {
          id: 3,
          img: "https://placekitten.com/100",
          title: "title 3",
          desc: "description 3 for the product number 3",
        },
      ],
    };
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
            {this.state.products.map((p) => {
              return (
                <tr>
                  <td>{p.id}</td>
                  <td>
                    <img src={p.img} />
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
