import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ItsJ6s8Nd6nGqQHvee7lpjAGUGMZzPUG&rating=g'

export default class GifListContainer extends Component {

    state = {gifs: []}

    fetchGifs = (query = "dolphin'") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ItsJ6s8Nd6nGqQHvee7lpjAGUGMZzPUG&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))})
        })
    }

    render() {
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/> 
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchGifs()
    }
}


