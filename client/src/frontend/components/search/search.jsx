import React from 'react'
import DisplaySearchTerms from './display_search_terms'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      results: this.props.searchTerms
    }
  }

  componentDidUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state.input) !== JSON.stringify(nextState.input)) {
      this.props.fetchSearchSuggestions(this.state.input)
    }
  }

  handleChanges(e) {
    this.setState({
      input: e.target.value,
      results: this.props.searchTerms
    })
  }


  returnSearchSuggestions() {
    return <ul>
      {Object.values(this.state.results).map(item => 
        <li>{item.label}</li>
      )} 
    </ul>
  }

  render() {
    return (
      <>
        <input 
          type='text' 
          id='search-bar'
          onChange={e => this.handleChanges(e)} 
          placeholder="Search"
          value={this.state.input}
          />
          <DisplaySearchTerms 
            results={this.props.searchTerms} 
            input={this.state.input}
          /> 
      </>
    )
  }
}

export default Search