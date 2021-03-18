import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { priceAsFloat } from '../../util/formatting_util'
import CartItemContainer from './cart_item_container'
import Cart from '../../../images/store-cart.png'
import '../../../stylesheets/header-container.scss'
import '../../../stylesheets/cart-dropdown.scss'

const CartPreview = ({ products, cart, currentUser, fetchProduct, saveCart, hidden }) => {
  let history = useHistory();
  useEffect(() => {
    if (currentUser.id) {
      saveCart(currentUser.id, cart)
    }
  }, [])

  async function loadProduct(itemId) {
    return fetchProduct(itemId)
  }

  const linkToCart = () =>
    <button onClick={() => history.push("/cart")}>
      View Cart
    </button>

  if (cart === {} || cart === undefined || hidden) return null
  let total = 0;

  return (
    <ul id='cart-preview'>
      {
        Object.keys(cart).map(itemId => {
          const item = products[itemId] || loadProduct(itemId).catch(() => null)
          total += priceAsFloat(item) || 0
          return <li className='cart-items'>
            <CartItemContainer item={item} />
          </li>
        }
        )}
      <p>{total == 0 ? "No Items in Cart :(" : <>${total}{linkToCart()}</>}</p>
    </ul>

  )
}

export default CartPreview