import React, { useContext, useState } from 'react'
import { nameContext } from './Cart'
import Shoe8 from './images/shoe8.jpeg'
import './Product_1.css'

function Product_2 (props) {
  const { initial, setInitial } = props
  const nameValue = useContext(nameContext)
  const click_to_add = () => {
    let initial_cart = initial
    initial_cart = initial + 1
    setInitial(initial_cart)
  }
  const click_to_Remove = () => {
    let remove_cart = initial
    remove_cart = initial - 1
    if (!(remove_cart < 0)) {
      setInitial(remove_cart)
    }
  }

  return (
    <div className='cart_style'>
      <div>
        <img src={Shoe8} className='img_style' />
        <button onClick={() => click_to_add()}>Add</button>
        <button onClick={() => click_to_Remove()}>Remove</button>
      </div>
    </div>
  )
}

export default Product_2
