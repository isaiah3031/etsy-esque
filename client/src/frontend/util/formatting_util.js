export const imageUrl = (product) => {
  if (isPromise(product)) return null
  if (!product.images) {
    return product.item.enrichment.images.primary_image_url
  } else {
    return product.images.primaryUri
  }
}


export const formatTitle = (title) => {
  if (!title) return null
  let formattedTitle = title.split(' ').filter(segment => {
    if (!['#', '$', '&', ';', '(', ')'].some(char => segment.includes(char))) {
      return segment
    }
  })
  return formattedTitle.join(' ')
}

export const priceAsFloat = (product) => {
  if (!product.price) return 0
  return parseFloat(product.price.formatted_current_price.slice(1))
}

const isPromise = (product) => ((typeof product == 'object' || typeof product == 'function') &&
  typeof product.then == 'function')