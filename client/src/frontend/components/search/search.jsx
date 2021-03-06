import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import DisplaySearchTerms from './display_search_terms'
import SearchIcon from '../../../images/store-search.png'
import '../../../stylesheets/search-bar.scss'

const Search = (props) => {
  const [input, setInput] = useState('')
  const previousInput = usePrevious(input)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    if (JSON.stringify(input) !== JSON.stringify(previousInput)) {
      try {
        props.fetchSearchSuggestions(input)
      } catch (error) {
        return null
      }
    }
  }, [input])



  // Running props.history.go() without the timeout function doesn't work for some 
  // reason and I haven't been able to find a reason why.
  const HandleSubmit = () => {
    const history = useHistory()
    let formattedKeywords = input.split(' ').join('%20')
    history.push(`/search/${formattedKeywords}`)
    setTimeout(() => {
      props.history.go()
    }, 10);
  }

  return <>
    <form onSubmit={() => HandleSubmit()} id="search-bar">
      <input
        type='text'
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