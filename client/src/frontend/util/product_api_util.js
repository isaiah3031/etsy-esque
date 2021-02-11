import $ from 'jquery'
const { REACT_APP_API_KEY } = process.env

export const fetchProductsByKeyword = (keyword) => {
  keyword = keyword.split(' ').join('%20')
  return $.ajax({
    "async": true,
    "crossDomain": true,
    "url": "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?store_id=3991&keyword=lamp%20tv&sponsored=1&limit=50&offset=0",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": REACT_APP_API_KEY,
      "x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com"
    }
  })
}

export const fetchProduct = (productId) => 
  $.ajax({
	"async": true,
	"crossDomain": true,
	"url": `https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=3991&tcin=${productId}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": REACT_APP_API_KEY,
		"x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com"
	}
})

export const fetchReviews = (productId) =>
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/reviews?tcin=${productId}&limit=100&offset=0`,
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "aa3a6f134dmshf42b60c8bcee96ep1ef782jsn78b48b995001",
      "x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com"
    }
  })

const createKeywordString = (keyword) => (
  keyword.split(' ').join('%20')
)