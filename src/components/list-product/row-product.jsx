import './row-product.css'

export default function RowProduct(props) {
  return (
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
        {props.listProducts.map((product) => {
          return (
            <tr scope="row">
              <td>{product.id}</td>
              <td>
                <img height="100" src={product.img} />
              </td>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>
                <button style={{zoom:.8}}className="mb-2 btn btn-info">
                  {" "}
                  <i className="fa fa-edit"></i>
                </button>
                <button style={{zoom:.8}}className="btn btn-danger">
                  {" "}
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
