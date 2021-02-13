import React from 'react'
import { removeFromCart } from '../../actions/cart_actions';

// I'm thinking that if an Item isn't found I should call a function to fetch it.
// Maybe create two functions to move the logic for printing an existing item and
// fetching a missing one.
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