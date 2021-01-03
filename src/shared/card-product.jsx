import { Link } from "react-router-dom";

export default function CardProduct(props) {
  return (
    <div className="card mr-3 mb-2"  style={{width:'18rem'}}>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <img  src={props.img} className="card-img-top" alt="..." />
      </div>
      <div style={{zoom:.9}} className="card-body text-center" height='130px'>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <Link to={`/product-details/${props.id}`}>
          <a href="#" className="btn btn-warning text-uppercase">
            add to cart
          </a>
        </Link>
      </div>
    </div>
  );
}
