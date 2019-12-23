import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (term = 'Good Morning') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=JsCAtnCyDjBEmI7HMY7eVKL0ghJC99ds&rating=g&limit=3`).then(resp => resp.json())
    .then(({data}) => {
      this.setState({gifs: data.map( gif => ({ url: gif.images.original.url }) )});
    })
  }

  render() {

    return (
      <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch onSearch={this.fetchGifs} />
      </div>
    );
  }

}
