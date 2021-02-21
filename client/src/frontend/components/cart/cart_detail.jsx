import React, { useEffect } from 'react'

const CartDetail = ({cart, currentUser, products}, props) => {
  const fetchProduct = (productId) => {
    const product = new Promise(props.fetchProduct(productId))
    return product.then(() => products[productId])
  }

  debugger
  return (
    <ul>
      <li>asdf</li>{cart.map(item => <li>{item}</li>)}
    </ul>
  )
}

export default CartDetail