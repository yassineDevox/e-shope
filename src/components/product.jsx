export default function Product(props) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
            {props.desc}
        </p>
        <a href="#" className="btn btn-warning text-uppercase">
          add to cart 
        </a>
      </div>
    </div>
  );
}


