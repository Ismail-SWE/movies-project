import { useContext } from "react"
import {Context} from '../context'
import "./app-filter.css"

const AppFilter = () =>{
    const {state, dispatch} = useContext(Context)
    return (
    <div className="btn-group">
        {btnArr.map(btn => (
        <button key= {btn.name} onClick = {()=> dispatch({type: "ON_FILTER", payload: btn.name})} className={`btn ${state.filter === btn.name? 'btn-dark' : 'btn-outline-dark'}`} type="button">
            {btn.label}
        </button>
        ))}
    </div>
    ) 
}

const btnArr = [
    {name: "all", label: "Barcha Kinolar"}, 
    {name: "popular", label: "Mashhur kinolar" },
    {name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar"}
]

export default AppFilter;