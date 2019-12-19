import React, {Component} from 'react' 

export default class GifList extends Component{

    find_images=()=>{
        const list = this.props.list 
        return list.map(e => {return <img src={e} alt="gifImage"></img>})
    }

    render(){
        return(<div>
            <ul>
            {this.find_images()}

            </ul>
        </div>)
    }
}