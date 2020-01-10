import React, { Component } from 'react'

class GifSearch extends Component {
  render() {
    return (
      <div class='form-group' style={{padding: '0 3em'}}>
        <form onSubmit={event => this.props.submitSearch(event)}>
          <input class='form-control' type='text' name='searchTerm' onChange={event => this.props.inputSearchTerm(event.target.value)}/>
          <input type='submit' value='search' />
        </form>
      </div>
    )
  }
}

export default GifSearch