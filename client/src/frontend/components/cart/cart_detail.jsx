import React, { useEffect } from 'react'

const CartDetail = ({cart, currentUser, products}, props) => {
  const fetchProduct = (productId) => {
    if (products[productId]) return products[productId]
    const product = new Promise(props.fetchProduct(productId))
    return product.then(() => products[productId])
  }

  return (
    <ul>
      {Object.keys(cart).map(itemId => {
        const product = fetchProduct(itemId)
        return <li>{product}</li>
        })}
    </ul>
  )
}

export default CartDetail