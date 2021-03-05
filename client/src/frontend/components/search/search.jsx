import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import DisplaySearchTerms from './display_search_terms'
import SearchIcon from '../../../images/store-search.png'

const Search = (props) => {
  const [input, setInput] = useState('')
  const previousInput = usePrevious(input)

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    if (JSON.stringify(input) !== JSON.stringify(previousInput)) {
      props.fetchSearchSuggestions(input)
    }
  }, [input])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const HandleSubmit = () => {
    const history = useHistory()
    let formattedKeywords = input.split(' ').join('%20')
    history.push(`/search/${formattedKeywords}`)
    setTimeout(() => {
      props.history.go()
    }, 10);
  }

  return <>
    <form onSubmit={() => HandleSubmit()}>
      <input
        type='text'
        id='search-bar'
        onChange={handleChange}
        placeholder="Search"
        value={input}
      />
      <button id='search-button' style={{
        backgroundImage: `url(${SearchIcon})`
      }}></button>
    </form>
    <DisplaySearchTerms
      results={props.searchTerms}
      input={input}
    />
  </>

}

export default Search