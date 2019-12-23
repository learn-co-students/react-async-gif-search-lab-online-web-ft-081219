import React, { Component } from 'react';


export default class GifList extends Component {

  render() {
    const gifs = this.props.gifs.map(gif => <li key={gif.url}><img  src={gif.url} alt="gif" /></li>)

    return (
      <div>
        <ul>
          {gifs}
        </ul>
      </div>
    );
  }

}
