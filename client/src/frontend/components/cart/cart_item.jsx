import {imageUrl, formatTitle} from '../../util/formatting_util'

const CartItem = ({item}) => {
  return <>
    <img src={imageUrl(item)} />
    <p>{formatTitle(item.title)}</p>
  </>
}

export default CartItem