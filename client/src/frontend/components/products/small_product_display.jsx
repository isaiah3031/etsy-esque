import { withRouter } from 'react-router-dom'
import { addToCart } from '../../actions/cart_actions'

const SmallProductDisplay = ({product, history, addToCart}) => {
  const handleClick = () => {
    history.push(`/product/${product.tcin}`)
  }

  return (
    <>
      <div id={product.tcin} onClick={() => handleClick()}>
        <img src={`${product.images[0].base_url}${product.images[0].primary}`}/>
        <div>
          <label>{product.title}</label>
          <label>{product.price.formatted_current_price}</label>
        </div>
      </div>
      <input type='button' value='Add Cart' onClick={() => addToCart(product)} />
    </>
  )
}

export default withRouter(SmallProductDisplay)