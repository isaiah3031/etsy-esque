import React, {useEffect} from 'react'
import { saveCart } from '../../actions/cart_actions'
import Cart from '../../../images/store-cart.png'
import '../../../stylesheets/header-container.scss'
import '../../../stylesheets/cart-dropdown.scss'

const CartPreview = ({ products, cart, currentUser, removeFromCart, fetchProduct, receiveCart, saveCart }) => {
  useEffect(() => {
    if (currentUser.id) {
      saveCart(currentUser.id, cart)
    }
  }, [])

  const removeAndSave = (itemId) => {
    let removePromise = new Promise((resolve) => resolve(removeFromCart(itemId)))
    
    removePromise.then((action) => {
        let newCart = Object.keys(cart).filter(item => item != action.itemId)
        saveCart(currentUser.id, newCart)      
      }
    )
  }

  async function loadProduct(itemId) {
    return fetchProduct(itemId)
  }

  const imageUrl = (product) => {
    if (!product.images) {
      return product.item.enrichment.images.primary_image_url
    } else {
      return product.images.primaryUri
    }
  }

  const itemDetails = (item) => {
    if (item === undefined || Object.values(item)[0] === "Tcin not found.") return null 
    
    let price = item.price.current_retail || item.price.current_retail_max
    total += price
    return <li className='cart-items'>
      <img src={imageUrl(item)} />
      <p>{item.title || item.name}</p>
      <input 
        type='button' 
        value='remove?' 
        onClick={() => removeAndSave(item.tcin)}
      />
    </li>
  }
  if (cart === {} || cart === undefined) return null

  let total = 0;

  return (
    <div className='icon cart-icon'>
      <img src={Cart} />
      <ul className='cart-preview'>
        {
          Object.keys(cart).map(itemId => {
            const item = products[itemId]
            if (!item.images) {
              loadProduct(itemId).then(() => {
                return itemDetails(products[itemId]
              )})
              
            } else {
              return itemDetails(item)
            }
          }
        )}
        <p>{total == 0 ? "No Items in Cart :(" : total}</p>
      </ul>
    </div>
  )
}

export default CartPreview