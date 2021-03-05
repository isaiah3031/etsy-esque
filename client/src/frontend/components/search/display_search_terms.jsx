import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../../stylesheets/search-dropdown.scss'

const DisplaySearchTerms = ({ results, input }) => {
  if (input == '') return null

  const HandleClick = (e) => {
    const history = useHistory()
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
              onClick={(e) => HandleClick(e)}
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

export default DisplaySearchTerms