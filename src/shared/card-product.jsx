import { Link } from 'react-router-dom';

export default function CardProduct(props) {
    return (
      <div className="card" style={{ width: "15rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
              {props.desc}
          </p>
          <a href="#" className="btn btn-warning text-uppercase">
            <Link to={`/product-details/${props.id}`}> add to cart </Link> 
          </a>
        </div>
      </div>
    );
  }