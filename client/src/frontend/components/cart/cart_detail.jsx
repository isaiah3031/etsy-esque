import React from 'react'
import { priceAsFloat } from '../../util/formatting_util'
import '../../../stylesheets/cart-full-display.scss'
import CartItem from './cart_item'

const CartDetail = ({ cart, currentUser, products, saveCart, removeFromCart, fetchProduct }) => {
  const getProduct = (productId) => {
    if (products[productId]) return products[productId]
    return new Promise((resolve) => resolve(fetchProduct(productId)))
  }

  const removeAndSave = (itemId) => {
    let removePromise = new Promise((resolve) => resolve(removeFromCart(itemId)))
    removePromise.then((action) => {
      let newCart = Object.keys(cart).filter(item => item != action.itemId)
      saveCart(currentUser.id, newCart)
    }
    )
  }

  const emptyCart = () => {
    Object.keys(cart).forEach(item => removeAndSave(item))
  }

  const getTotal = () => {
    let total = 0;
    Object.keys(cart).map(itemId => {
      const product = getProduct(itemId)
      total += priceAsFloat(product)
    })
    return total
  }

  if (getTotal() == 0) return <h2>Your cart is empty</h2>

  return (
    <div className='cart-and-total'>
      <ul className='cart'>
        {Object.keys(cart).map(itemId => {
          const product = getProduct(itemId)
          return <li className='cart-items'>
            <CartItem item={product} />
            <input
              type='button'
              value='remove?'
              onClick={() => removeAndSave(product.tcin)}
            />
          </li>
        })}
      </ul>
      <p className='total'>{getTotal()}
        <button onClick={() => emptyCart()}>Purchase</button>
      </p>
    </div>
  )
}

export default CartDetail