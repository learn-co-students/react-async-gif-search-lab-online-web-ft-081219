import React, {Component} from 'react' 

export default class GifList extends Component{

    render() {
        return(
            <div>
                <ul>
                {this.props.gifs.map(gif => <span><img className='gif' key={gif.url} src={gif.url} alt='gif'/></span>)}
                </ul>
            </div>
        )
    }
}
