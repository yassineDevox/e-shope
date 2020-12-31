export default function RowProduct(p){

    return (
        <tr>
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
              onClick={p.handleEdit}
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
              onClick={p.handleDelete}
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
}