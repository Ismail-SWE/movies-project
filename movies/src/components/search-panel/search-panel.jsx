import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component { 
    constructor(props){
        super(props)
        this.state = { term: ''}
    }

    updateTermHandler = (e) =>{
        const term = e.target.value.toLowerCase()
        this.setState({term})
        this.props.updateTermHandler(term)
    }

    render(){
        return <input onChange = {this.updateTermHandler} value={this.state.term} type="text" className="form-control search-input" placeholder="Kinolarni qidirish..."  />
    }
}

export default SearchPanel;