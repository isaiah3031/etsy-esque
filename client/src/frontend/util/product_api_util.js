import $ from 'jquery'
const { REACT_APP_API_KEY } = process.env

export const fetchProducts = () => 
  $.ajax({
    type: 'GET', 
    url: `https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=${ REACT_APP_API_KEY }`
  })


export const fetchSortCategories = () => 
  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": "https://amazon-product-reviews-keywords.p.rapidapi.com/categories?country=US",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "aa3a6f134dmshf42b60c8bcee96ep1ef782jsn78b48b995001",
      "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
    }
  })


const createKeywordString = (keyword) => (
  keyword.split(' ').join('%20')
)