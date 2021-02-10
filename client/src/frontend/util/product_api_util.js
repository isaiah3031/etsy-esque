import $ from 'jquery'

export const fetchProductsByKeyword = (keyword) => {
  keyword = createKeywordString(keyword)
  return $.ajax({
    "async": true,
    "crossDomain": true,
    "url": "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "aa3a6f134dmshf42b60c8bcee96ep1ef782jsn78b48b995001",
      "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
    }
  })
}

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