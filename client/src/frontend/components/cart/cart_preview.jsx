import React from 'react'
import { removeFromCart } from '../../actions/cart_actions';

const CartPreview = ({cart, removeFromCart}) => {
  if (cart === {}) return null
  let total = 0;
  return (
    <>
      {
        Object.keys(cart).map(itemId => {
          const item = cart[itemId]
          total += item.price.current_retail
          return <>
            <p>{item.title || item.name}</p>
            <input type='button' value='Remove From Cart' onClick={() => removeFromCart(itemId)} />
          </>
        }
      )}
      <p>{total}</p>
    </>
  )
}

export default CartPreview