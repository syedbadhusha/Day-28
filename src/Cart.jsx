import React, { useContext } from 'react'
import CartPage from './CartPage'
import {ApiContext} from './UserContext'


function Cart() {
    const {dataApi} = useContext(ApiContext)
  return (
    <div>        {
        dataApi.map((product,index)=>{
            return (
              <CartPage key={index} product={product}/>
            )
          }
        )
      }
</div>
  )
}

export default Cart