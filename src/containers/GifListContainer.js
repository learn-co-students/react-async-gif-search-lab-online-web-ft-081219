import React, {Component} from 'react'
import GifList from '../components/GifList' 
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
    constructor(){
        super() 
        this.state = {list: []}
        
    }
    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then( json => {console.log(json);this.setState( {list: json.data.map(e => e.images.original.url) })} )
    }
    handleSubmit= (term)=>{
       fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
       .then(resp => resp.json())
       .then(json => {this.setState( {list: json.data.map(e => e.images.original.url) })})


    }

    render(){
        return(<div>
            <GifSearch handleSubmit={this.handleSubmit} />

            <GifList list={this.state.list} />
        </div>)
    }
}