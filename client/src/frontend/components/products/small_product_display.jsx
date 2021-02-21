import { withRouter } from 'react-router-dom'
import { addToCart } from '../../actions/cart_actions'
import '../../../stylesheets/small-product-display.scss'

const SmallProductDisplay = ({product, history, addToCart, saveCart, cart, currentUser}) => {
  if (Object.values(product)[0] == ["Tcin not found."]) return null

  const handleClick = () => {
    history.push(`/product/${product.tcin}`)
  }
    
  const addAndSave = (itemId) => {
    let addPromise = new Promise((resolve) => resolve(addToCart(itemId)))
    
    addPromise.then((action) => {
        let newCart = [...Object.keys(cart), action.item]
        saveCart(currentUser.id, newCart)      
      }
    )
  }

  const imageUrl = () => {
    if (!product.images) {
      return product.item.enrichment.images.primary_image_url
    } else {
      return product.images.primaryUri
    }
  }

  return (
    <div className='product-display'>
      <div id={product.tcin} onClick={() => handleClick()}>
        <img className='product-image' src={`${imageUrl()}`}/>
        <div className='product-info'>
          <h2>{product.price.formatted_current_price}</h2>
          <h2>{product.title}</h2>
        </div>
      </div>
      <input className="plus-button" type='button' value='+' onClick={() => addAndSave(product.tcin)} />
    </div>
  )
}

export default withRouter(SmallProductDisplay)