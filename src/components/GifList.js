import React, { Component } from 'react'

class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(gif => (
            <li key={gif.id}>
              <img src={gif.url} alt={`${gif.slug} gif`}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default GifList