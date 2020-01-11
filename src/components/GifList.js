import React, { Component } from 'react'

class GifList extends Component {

    render() {
        const url = this.props.gifs.slice(1, 4).map(gif => <img alt="gif img" src={gif} />)
        return (
            <div>
                {url}
            </div>
        )
    }
}

export default GifList