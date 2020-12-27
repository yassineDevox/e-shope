import "./row-product.css";

export default function RowProduct(props) {
  return (
    <tr scope="row">
      <td>{props.id}</td>
      <td>
        <img height="100" src={props.img} />
      </td>
      <td>{props.title}</td>
      <td>{props.desc}</td>
      <td>
        <button onClick={ props.handleUpdate} style={{ zoom: 0.8 }} className="mr-2 btn btn-info">
          {" "}
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={ props.handleDelete} style={{ zoom: 0.8 }} className="btn btn-danger">
          {" "}
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
