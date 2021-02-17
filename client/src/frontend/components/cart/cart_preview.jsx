import React, {useEffect} from 'react'
import { saveCart } from '../../actions/cart_actions'

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
  const itemDetails = (item) => {
    if (item === undefined || Object.values(item)[0] === "Tcin not found.") return null 
    
    let price = item.price.current_retail || item.price.current_retail_max
    total += price
    return <>
      <p>{item.title || item.name}</p>
      <input 
        type='button' 
        value='Remove From Cart' 
        onClick={() => removeAndSave(item.tcin)}
      />
    </>
  }
  if (cart === {} || cart === undefined) return null

  let total = 0;

  return (
    <>
      {
        Object.keys(cart).map(itemId => {
          const item = products[itemId]
          if (!item) {
            loadProduct(itemId).then(() => {
              
              return itemDetails(products[itemId]
            )})
            
          } else {
            return itemDetails(item)
          }
        }
      )}
      <p>{total}</p>
    </>
  )
}

export default CartPreview