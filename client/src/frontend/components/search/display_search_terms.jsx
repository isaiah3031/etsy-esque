import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../../stylesheets/search-dropdown.scss'

const DisplaySearchTerms = ({results, input, history}) => {
  if (input == '') return null 
  
  const handleClick = (e) => {
    let formattedSearchTerms = e.target.textContent.split(' ').join('%20')
    history.push(`/search/${formattedSearchTerms}`)  
    history.go()
  }

  try {
    return (
      <ul id='search-dropdown'>
        {
          results.map(suggestion => 
            <li 
              onClick={(e) => handleClick(e)}
              key={suggestion.id}>
              {suggestion.label}
            </li>
          )}
      </ul>
    )
  } catch (error) {
   return null 
  }
}

export default withRouter(DisplaySearchTerms)