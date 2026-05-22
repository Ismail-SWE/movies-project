import { useState } from "react";
import "./search-panel.css";


const SearchPanel = props => {
    const [term, setTerm] = useState('');

    const updateTermHandler = e => {
        const term = e.target.value.toLowerCase()
        setTerm(term)
        props.updateTermHandler(term)
    }

    return <input onChange = {updateTermHandler} value={term} type="text" className="form-control search-input" placeholder="Kinolarni qidirish..."  />
}


export default SearchPanel;