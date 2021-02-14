import React, {useEffect} from 'react'

const CartPreview = ({cart, currentUser, removeFromCart, fetchProduct, receiveCart}) => {
  // window.fetchProduct = fetchProduct;
  // window.removeFromCart = removeFromCart
  useEffect(() => {
    // This allows me to just save item ID's to my rails database.
    // If key === index the entry is wrong because they should be saved as tcins.
    // from there, if the current item is a tcin string, use it to fetch the item and or delete the bad entry
    // else if the entry is still wrong use it to reformat the entry as {tcin: item}
    debugger
    if (!!currentUser.id) {
      receiveCart(currentUser.id, cart).then((cart) => {    
        debugger
        Object.keys(cart).forEach((key, index) => {
        let item = cart[key]
        if (isTCIN(key)) {
          debugger
          fetchProduct(key)
          removeFromCart(key)
        } else if (item === "" || item === undefined) {
          removeFromCart(key)
        }
      })}
    )}
  }, [])

  const isTCIN = (key) => (cart[key] === undefined)

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
            <input type='button' value='Remove From Cart' onClick={() => removeFromCart(itemId)} />
          </>
        }
      )}
      <p>{total}</p>
    </>
  )
}

export default CartPreview