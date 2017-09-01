import React, { Component } from 'react';

import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'this is a test',
      searchValue: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    console.log('e.target.value in handleSearch', e.target.value);
    this.setState({ searchValue: e.target.value});
  }
  render() {
    return (
      <div className="Search">
          <input className="input"
              type="text"
              onChange={this.handleSearch}
              placeholder="Enter Text"
              value={this.state.searchValue}
            >
          </input>
      </div>
    )
  }
}

export default Search;
