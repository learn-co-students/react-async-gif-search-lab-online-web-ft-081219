import React, {Component} from 'react' 

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state ={term:""}
    }
    handleChange = (event) => {
        this.setState({term: event.target.value})
    }
    find_images=()=>{
        const list = this.props.list 
        return list.map(e => {return <img src={e} alt="gifImage"></img>})
    }

    find_term= (event) =>{
        this.props.handleSubmit(this.state.term)
        event.preventDefault()
    }

    render(){
        return(<div>
            <form onSubmit={this.find_term}> 
                <input onChange={this.handleChange} type="text" value={this.state.term}></input>
                <button>Submit</button>
            </form>
        </div>)
    }
}