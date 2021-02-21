import React from 'react'

const CartContents = ({cart, loadProduct, itemDetails}) => {
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
    return <li>
      <p>{item.title || item.name}</p>
      <input 
        type='button' 
        value='Remove From Cart' 
        onClick={() => removeAndSave(item.tcin)}
      />
    </li>
  }
  
  return (
    <ul className='cart-preview'>
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
      </ul>
  )
}