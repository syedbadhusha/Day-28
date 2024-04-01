import React, { useContext } from 'react'
import CartPage from './CartPage'
import {ApiContext} from './UserContext'


function Cart() {
    const {dataApi} = useContext(ApiContext)
  return (
    <div>        {
        dataApi.map((product)=>{
            return (
              <CartPage key={product.id} product={product}/>
            )
          }
        )
      }
</div>
  )
}

export default Cart