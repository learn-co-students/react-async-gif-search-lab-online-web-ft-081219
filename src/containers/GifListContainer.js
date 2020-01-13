import React, {Component} from 'react'
import GiftSearch  from '../components/GifSearch'
import GiftList  from '../components/GifList'

export default class GiftListContainer extends Component {
    state = {
        gifs: []
    }

    getGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj)
                this.setState({
                    gifs: obj.data.map( gif => ({src: gif.images.original.url}))
                })
            })
            .catch(error => {
                alert("Error fetching, check console.")
                console.log(error.message)
            })
    }

    render() {
        const row = {
            display: 'flex'
        }
        
        const colOne = {
            flex: '70%'
        }

        const colTwo = {
            flex: '30%'
        }

        return(
            <div style={row}>
                <div style={colOne}><GiftList gifs={this.state.gifs} /></div>
                <div style={colTwo}><GiftSearch getGifs={this.getGifs} /></div>
            </div>
        )
    }
}