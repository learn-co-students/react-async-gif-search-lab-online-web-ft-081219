import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        url: [],
        search: ""
        // slug: ""
    }

    componentDidMount() {
        return fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=d0OPJh1fGrogRV9S9kpVYhQyECq6Hfvn&rating=g')
            .then(resp => resp.json())
            .then(myData => {
                this.setState({
                    url: myData.data.map(gif => gif.images.original.url)
                })
            })
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }


    render() {
        // console.log(this.state.url.map(gif => gif.images.original.url))
        // console.log(this.state.url.map(gif => gif.id))
        return (
            <div >
                <div>
                    <GifList gifs={this.state.url} />
                    <GifSearch onChange={this.handleChange} />
                </div>
            </div>
        )
    }



}


export default GifListContainer