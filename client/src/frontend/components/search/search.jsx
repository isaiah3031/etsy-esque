import React from 'react'
import { withRouter } from 'react-router-dom'
import DisplaySearchTerms from './display_search_terms'
import SearchIcon from '../../../images/store-search.png'

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

  handleSubmit() {
    const { history } = this.props
    let formattedKeywords = this.state.input.split(' ').join('%20')
    history.push(`/search/${formattedKeywords}`)
    setTimeout((history) => {
      this.props.history.go()
    }, 10);
    
  }

  render() {
    return (
      <>
        <form onSubmit={() => this.handleSubmit()}>
          <input 
            type='text' 
            id='search-bar'
            onChange={e => this.handleChanges(e)} 
            placeholder="Search"
            value={this.state.input}
            />
            <button id='search-button' style={{ 
              backgroundImage: `url(${SearchIcon})` 
            }}></button>
          </form>
          <DisplaySearchTerms 
            results={this.props.searchTerms} 
            input={this.state.input}
          /> 
      </>
    )
  }
}

export default withRouter(Search)