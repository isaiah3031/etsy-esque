import React, {useEffect} from 'react'
import { saveCart } from '../../actions/cart_actions'

const CartPreview = ({ cart, currentUser, removeFromCart, fetchProduct, receiveCart, saveCart }) => {
  useEffect(() => {
    if (currentUser.id) {
      saveCart(currentUser.id, Object.keys(cart))
    }
  }, [])

  const removeAndSave = (itemId) => {
    removeFromCart(itemId)
    saveCart(currentUser.id, cart)
  }

  if (cart === {} || cart === undefined) return null

  let total = 0;

  return (
    <>
      {
        Object.keys(cart).map(itemId => {
          const item = cart[itemId]
          if (typeof item === 'string') return
          let price = item.price.current_retail || item.price.current_retail_max
          total += price
          return <>
            <p>{item.title || item.name}</p>
            <input type='button' value='Remove From Cart' onClick={() => removeAndSave(itemId)} />
          </>
        }
      )}
      <p>{total}</p>
    </>
  )
}

export default CartPreview