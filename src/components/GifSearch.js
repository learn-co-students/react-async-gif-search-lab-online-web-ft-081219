import React, { Component } from 'react';


export default class GifSearch extends Component {

  state = {
    term: ''
  }

  handleInput = (e) => {
    this.setState({term: e.target.value})
  }
  onSearch = e => {
    e.preventDefault()
    this.props.onSearch(this.state.term)

    this.setState({term: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSearch(e)}>
          <label htmlFor='search'>Enter a Searh Term</label>
          <input type='text' value={this.state.term} onChange={e => this.handleInput(e)} id="search"></input>
          <button>Find Gifs</button>
        </form>
      </div>
    );
  }

}
