import { imageUrl, formatTitle, priceAsFloat } from '../../util/formatting_util'

const CartItem = ({ item }) => {
  try {
    return <>
      <img src={imageUrl(item)} />
      <div className='product-info'>
        <p>{formatTitle(item.title)}</p>
        <p>{item.price.formatted_current_price}</p>
      </div>
    </>
  } catch (error) {
    return <p>Product not Found</p>
  }

}

export default CartItem