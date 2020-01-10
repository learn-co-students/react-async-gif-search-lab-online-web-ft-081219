import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ""
  }

  processGifsForState = obj => (
    obj.data.map(gif => ({
      type: gif.type,
      id: gif.id,
      slug: gif.slug,
      url: gif.images.original.url
    }))
  )

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g&limit=3')
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        gifs: this.processGifsForState(obj)
      })
    })
  }

  inputSearchTerm = string => {
    this.setState({
      searchTerm: string
    })
  }

  submitSearch = event => {
    event.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3'`)
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        gifs: this.processGifsForState(obj)
      })
    })
  }
  
  render() {
    return (
      <div>
        <GifSearch 
          inputSearchTerm = {this.inputSearchTerm} 
          submitSearch = {this.submitSearch}
        />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer