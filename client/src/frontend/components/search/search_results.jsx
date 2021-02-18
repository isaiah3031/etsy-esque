import React from 'react'

const SearchResults = ({results, input}) => {
  if (input == '') return null 
  try {
    return (
      <div id='search-results'>
        <h1>Search Results:</h1>
        {results.map(suggestion => <li>{suggestion.label}</li>)}
      </div>
    )
  } catch (error) {
   return null 
  }
}

export default SearchResults