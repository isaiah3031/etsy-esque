import { withRouter } from 'react-router-dom'

const SmallProductDisplay = ({product, history}) => {
  const handleClick = () => {
    history.push(`/product/${product.tcin}`)
  }

  return (
    <div id={product.tcin} onClick={() => handleClick()}>
      <img src={`${product.images[0].base_url}${product.images[0].primary}`}/>
      <div>
        <label>{product.title}</label>
        <label>{product.price.formatted_current_price}</label>
      </div>
    </div>
  )
}

export default withRouter(SmallProductDisplay)