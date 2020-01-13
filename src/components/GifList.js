import React, {Component} from 'react'

export default class GifList extends Component{
    render() {
        return(
            <div className="gif-list">
                <ul>{this.props.gifs.map(gif => <li><img src={gif.src} alt="gif from giphy"/></li>)}</ul>
            </div>
        )
    }
}