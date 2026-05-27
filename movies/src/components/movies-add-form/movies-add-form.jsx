import { useState, useContext } from "react";
import {Context} from '../context'
import "./movies-add-form.css";

const MoviesAddForm = () => {
  const [state, setState] = useState({name:'', views:''});

  const {_, dispatch} = useContext(Context)
 
  
  const changeHandlerInput = (e) => { setState({...state, [e.target.name]: e.target.value})}

  const addFormHandler = (e) => {
    if(state.name === "" || state.views === "") return
    e.preventDefault();
    const data = {name: state.name, viewers: state.views}
    dispatch({type: 'ADD_FORM', payload: data})
    setState({name: '', views: ''})
  }

  return (
    <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit = {addFormHandler}>
            <input  value={state.name} onChange = {changeHandlerInput} name="name" type="text" className="form-control new-post-label"  placeholder="Qanday kino?" />
            <input  value={state.views} onChange = {changeHandlerInput} name="views" type="number" className="form-control new-post-label" placeholder="Nechi marotaba ko'rilgan?"  />
            <button type="submit" className="btn btn-outline-dark">
                Qo'shish
            </button>
        </form>
    </div>
  )
}



export default MoviesAddForm;

