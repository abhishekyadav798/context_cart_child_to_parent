import React, { useState } from 'react'

import './Cart.css'

import { createContext } from 'react'
import Product_1 from './Product_1'
import Product_2 from './Product_2'

function Cart () {
  let abc = []
  const [initial, setInitial] = useState(JSON.stringify(abc))

  const click_to_add = () => {
    let abc1 = JSON.parse(initial)
    console.log(abc1[0].Product_name)
  }

  return (
    <div>
      <div className='cart_style'>
        <button onClick={() => click_to_add()}>show total items</button>
      </div>

      <nameContext.Provider value={initial}>
        <Product_1 initial={initial} setInitial={setInitial} />
        <Product_2 initial={initial} setInitial={setInitial} />
      </nameContext.Provider>
    </div>
  )
}
export const nameContext = createContext('setInitial')
export default Cart
