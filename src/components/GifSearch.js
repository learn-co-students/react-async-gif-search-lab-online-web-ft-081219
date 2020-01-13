import React, {Component} from 'react'

export default class GifSearch extends Component{
    handleSubmit = (event) => {
        event.preventDefault()
        event.persist()
        console.log(this.refs.query.value)
        this.props.getGifs(this.refs.query.value)
    }

    render() {
        const button = {
            backgroundColor: 'green',
            color: 'white',
            margin: '5px'
        }

        return(
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a Search Term:</label>
                    <br></br>
                    <input type="text" ref="query"></input>
                    <br></br>
                    <input type="submit" value="Find Gifs" style={button}></input>
                </form>
            </div>
        )
    }
}