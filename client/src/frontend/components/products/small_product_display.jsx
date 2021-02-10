const SmallProductDisplay = ({product}) => {
  return (
    <div>
      <img/>
      <div>
        <label>{product.title}</label>
        <label>{product.price}</label>
      </div>
    </div>
  )
}

export default SmallProductDisplay