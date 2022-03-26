import React, { useContext, useState } from 'react'
import { nameContext } from './Cart'
import Shoe7 from './images/shoe7.jpeg'
import './Product_1.css'

function Product_1 (props) {
  const { initial, setInitial } = props
  const nameValue = useContext(nameContext)

  const click_to_add = () => {
    let add_to_array = JSON.parse(initial)
    add_to_array.push({ Product_name: 'product3333', price: 1000 })
    let abc = JSON.stringify(add_to_array)
    console.log(abc)
    setInitial(abc)
  }

  const click_to_Remove = () => {
    let remove_array = JSON.parse(initial)
    remove_array.pop()
    let abc1 = JSON.stringify(remove_array)
    console.log(abc1)
    setInitial(abc1)
  }

  return (
    <div className='cart_style'>
      <div>
        <img src={Shoe7} className='img_style' />
        <button onClick={() => click_to_add()}>Click TO Add</button>
        <button onClick={() => click_to_Remove()}>Remove </button>
      </div>
    </div>
  )
}

export default Product_1
