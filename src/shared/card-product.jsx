import { Link } from "react-router-dom";

export default function CardProduct(props) {
  return (
    <div className="card mr-3 mb-2"  style={{width:'18rem'}}>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <Link to={`/product-details/${props.id}`}><img  src={props.img} className="card-img-top" alt="..." /></Link>
       
       </div>
      <div style={{zoom:.9}} className="card-body text-center" height='130px'>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
       
          <a href="#" onClick={props.handleClickBtn} className="btn btn-warning text-uppercase">
            add to cart
          </a>
       
      </div>
    </div>
  );
}
