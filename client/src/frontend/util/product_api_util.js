import $ from 'jquery'
const { REACT_APP_API_KEY } = process.env

export const fetchSearchSuggestions = (keyword) => {
  keyword = keyword.split(' ').join('%20')
  
  return $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `https://target1.p.rapidapi.com/auto-complete?q=${keyword}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "aa3a6f134dmshf42b60c8bcee96ep1ef782jsn78b48b995001",
      "x-rapidapi-host": "target1.p.rapidapi.com"
    }
  })
}
export const fetchProductsByKeyword = (keyword) => {
  keyword = keyword.split(' ').join('%20')
  return $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `https://target1.p.rapidapi.com/products/list?storeId=911&endecaId=5xtg6&pageSize=20&pageNumber=1&sortBy=relevance&searchTerm=${keyword}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-key": REACT_APP_API_KEY,
      "x-rapidapi-host": "target1.p.rapidapi.com"
    }
  })
}

export const fetchProduct = (productId) => 
  $.ajax({
	"async": true,
	"crossDomain": true,
	"url": `https://target1.p.rapidapi.com/products/get-details?tcin=${productId}&store_id=911`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": REACT_APP_API_KEY,
		"x-rapidapi-host": "target1.p.rapidapi.com"
    }
  })

export const fetchReviews = (productId) =>
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": `https://target1.p.rapidapi.com/reviews/list?tcin=${productId}&sort=time_desc&limit=30&offset=0`,
    "method": "GET",
    "headers": {
      "x-rapidapi-key": REACT_APP_API_KEY,
      "x-rapidapi-host": "target1.p.rapidapi.com"
    }
  })

const createKeywordString = (keyword) => (
  keyword.split(' ').join('%20')
)