import ProductContext from "../../shared/context/product-context";
import {useContext} from 'react';

export default function ShoppingCard (){

    const {shoppingCard} = useContext(ProductContext)
    console.log(shoppingCard);

    return (
       
   <section>
  <div className="container mb-4">
    <div className="row">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Product</th>
                <th scope="col">Available</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col" className="text-right">Price</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {
                  shoppingCard.map((shope)=>{
                      return (
                        <tr key={shope.idShope}>
                        <td><img src={shope.img} height='100' width='100'/> </td>
                        <td>{shope.title}</td>
                        <td >In stock</td>
                        <td><input className="form-control" type="text" defaultValue={shope.quantity} /></td>
                        <td className="text-right">124,90 €</td>
                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
                      </tr>
                      )
                  })
              }
            
            </tbody>
          </table>
        </div>
      </div>
      <div className="col mb-2">
        <div className="row">
          <div className="col-sm-12  col-md-6">
            <button className="btn btn-block btn-light">Continue Shopping</button>
          </div>
          <div className="col-sm-12 col-md-6 text-right">
            <button className="btn btn-lg btn-block btn-warning text-uppercase">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

