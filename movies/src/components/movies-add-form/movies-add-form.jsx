import { Component } from "react";
import "./movies-add-form.css";


 class MoviesAddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      views: ""
    }
  }

  changeHandlerInput = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addFormHandler = (e)=> {
    e.preventDefault()
    this.props.addForm({
      name: this.state.name, 
      viewers: this.state.views, 
    })
    this.setState({
      name: '',
      views: '',
    })
  }

  render() {
    const {name, views} = this.state
  
  return (
    <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit = {this.addFormHandler}>
            <input  value={name} onChange = {this.changeHandlerInput} name="name" type="text" className="form-control new-post-label"  placeholder="Qanday kino?" />
            <input  value={views} onChange = {this.changeHandlerInput} name="views" type="number" className="form-control new-post-label" placeholder="Nechi marotaba ko'rilgan?"  />
            <button type="submit" className="btn btn-outline-dark">
                Qo'shish
            </button>
        </form>
    </div>
  )
 }
}

export default MoviesAddForm;

//demak, user yozadi changeHandler input ishga tushadi va valuelarni olib name va viewsga ya'ni statega saqlab turadi
//  o'zidagi setState orqali yangilab

// submit bo'lgan vaqti ishga tushadi addFormHandler va u ichidan propsdan app.jsx yuborgan addForm functionni oladi
// va unga stateda saqlab turilgan name va viewerslardagi qiymatlarni qo'shadi va yangilaydi yozib bo'lingan input ichini tozalab