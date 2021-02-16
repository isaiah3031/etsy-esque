import { withRouter } from 'react-router-dom'
import { addToCart } from '../../actions/cart_actions'

const SmallProductDisplay = ({product, history, addToCart, saveCart, cart, currentUser}) => {
  if (Object.values(product)[0] == ["Tcin not found."]) return null

  const handleClick = () => {
    history.push(`/product/${product.tcin}`)
  }
    
  const addAndSave = (itemId) => {
    new Promise(() => addToCart(itemId)).then(
      () => {
        if (currentUser.id) saveCart(currentUser.id, Object.keys(cart))
      }
    )
  }

  return (
    <>
      <div id={product.tcin} onClick={() => handleClick()}>
        <img src={`${product.images[0].base_url}${product.images[0].primary}`} a/>
        <div>
          <label>{product.title}</label>
          <label>{product.price.formatted_current_price}</label>
        </div>
      </div>
      <input type='button' value='Add Cart' onClick={() => addAndSave(product.tcin)} />
    </>
  )
}

export default withRouter(SmallProductDisplay)