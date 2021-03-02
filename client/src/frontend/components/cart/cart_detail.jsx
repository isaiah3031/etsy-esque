import React from 'react'
import { priceAsFloat } from '../../util/formatting_util'
import '../../../stylesheets/cart-full-display.scss'
import CartItem from './cart_item'

const CartDetail = ({cart, currentUser, products, saveCart, removeFromCart}, props) => {
  const fetchProduct = (productId) => {
    if (products[productId]) return products[productId]
    const product = new Promise(props.fetchProduct(productId))
    return product.then(() => products[productId])
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

  let total = 0
  return (
    <div className='cart-and-total'>
    <ul>
      {Object.keys(cart).map(itemId => {
        const product = fetchProduct(itemId)
        total += priceAsFloat(product)
        return <li className='cart-items'>
          <CartItem item={product}/>
            <input 
              type='button' 
              value='remove?' 
              onClick={() => removeAndSave(product.tcin)}
            />
        </li>
      })}
    </ul>
    <p className='total'>{total}
      <button onClick={() => emptyCart()}>Purchase</button> 
    </p>
  </div>
)}

export default CartDetail