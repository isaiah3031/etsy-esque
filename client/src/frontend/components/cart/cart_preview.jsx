import React, {useEffect} from 'react'
import { priceAsFloat } from '../../util/formatting_util'
import CartItemContainer from './cart_item_container'
import Cart from '../../../images/store-cart.png'
import '../../../stylesheets/header-container.scss'
import '../../../stylesheets/cart-dropdown.scss'

const CartPreview = ({ products, cart, currentUser, removeFromCart, fetchProduct, receiveCart, saveCart }) => {
  useEffect(() => {
    if (currentUser.id) {
      saveCart(currentUser.id, cart)
    }
  }, [])

  async function loadProduct(itemId) {
    return fetchProduct(itemId)
  }

  const removeAndSave = (itemId) => {
    let removePromise = new Promise((resolve) => resolve(removeFromCart(itemId)))
    
    removePromise.then((action) => {
        let newCart = Object.keys(cart).filter(item => item != action.itemId)
        saveCart(currentUser.id, newCart)      
      }
    )
  }
  // const itemDetails = (item) => {
  //   if (item === undefined || Object.values(item)[0] === "Tcin not found.") return null 
  // }

  if (cart === {} || cart === undefined) return null

  let total = 0;

  return (
    <div className='icon cart-icon'>
      <img src={Cart} />
      <ul className='cart-preview'>
        {
          Object.keys(cart).map(itemId => {
            const item = products[itemId] || loadProduct(itemId)
            total += priceAsFloat(item) || 0 
            return <li className='cart-items'>
              <CartItemContainer item={item}/>

            </li>}
          )}
        <p>{total == 0 ? "No Items in Cart :(" : total}</p>
      </ul>
    </div>
  )
}

export default CartPreview