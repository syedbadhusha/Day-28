import { useContext, useState } from "react";
import { ApiContext } from "./UserContext";

function CartPage({product}) {
  const {dataApi,setDataApi} = useContext(ApiContext)
  const [qty,setQty]=useState(1)

  function removeProduct(id){
    const removedList = dataApi.filter((ele)=>ele.id!==id)
    setDataApi(removedList);
  }
  return (
    <div className="col-md-12">
      <div className="card mb-3 p-3" style={{backgroundColor:"#f6f5f8"}}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={product.thumbnail} alt="..." style={{width:'200px'}}/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-title">Details & Care</h6>
              <p className="card-text">
                {product.description}              
              </p>
              <p className="card-text">
              </p>
            </div>
          </div>
          <div className="col-md-1">
                <div>
                    <input type="number" value={qty} style={{width:"40px"}} min='1' onChange={(e)=>setQty(e.target.value)}/>
                </div>
                <div style={{paddingTop:"50px"}}>
                    <button style={{color:"red"}} onClick={()=>removeProduct(product.id)}>REMOVE</button>
                </div>
            </div>
            <div className="col-md-1">
                <div>
                    <h6>{`$${product.price*qty}.00`}</h6>
                </div>
            </div>
        </div>
        <div className="row" style={{marginTop:"50px", paddingTop:"20px", borderTop:"2px solid gray"}}>
            <div className="col-md-11">SUBTOTAL </div>
            <div className="col-md-1">
                <div>
                    <h6>{`$${product.price*qty}.00`}</h6>
                </div>
            </div>
        </div>
        <div className="row" style={{paddingBottom:"20px", borderBottom:"2px solid gray"}}>
            <div className="col-md-11">SHIPPING </div>
            <div className="col-md-1">
                <div>
                    <h6>FREE</h6>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-11">TOTAL </div>
            <div className="col-md-1">
                <div>
                    <h6>{`$${product.price*qty}.00`}</h6>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <p className="col-md-12" style={{textAlign:"right", color:"red"}}>Get Daily cash with nespola card </p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
