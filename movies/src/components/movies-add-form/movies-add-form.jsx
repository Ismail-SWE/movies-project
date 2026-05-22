import { useState } from "react";
import "./movies-add-form.css";

const MoviesAddForm = ({addForm}) => {
  const [state, setState] = useState({name:'', views:''});
 
  
  const changeHandlerInput = (e) => { setState({...state, [e.target.name]: e.target.value})}

  const addFormHandler = (e) => {
    if(state.name === "" || state.views === "") return
    e.preventDefault();
    const data = {name: state.name, viewers: state.views}
    addForm(data)
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

//demak, user yozadi changeHandler input ishga tushadi va valuelarni olib name va viewsga ya'ni statega saqlab turadi
//  o'zidagi setState orqali yangilab

// submit bo'lgan vaqti ishga tushadi addFormHandler va u ichidan propsdan app.jsx yuborgan addForm functionni oladi
// va unga stateda saqlab turilgan name va viewerslardagi qiymatlarni qo'shadi va yangilaydi yozib bo'lingan input ichini tozalab