import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";

import "./app.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     data :[
       {name: 'Empire of Osman', viewers: 988, favourite: false, like: false, id:1},
       {name: 'Ertugrul', viewers: 789, favourite: false, like: false, id: 2},
       {name: 'Osman', viewers: 1091, favourite: false, like: false, id: 3},
      ],
      term: "",
      filter:  "",
    }
  }

onDelete = id => { 
  this.setState(({data}) => ({
  data: data.filter(c => c.id != id)
}))
}  

addForm = item => {
  const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false}
  this.setState(({data}) => ({
    data: [...data, newItem]
  }))
} 

onToggleProp = (id, prop) => {
  this.setState(({data})=>{
    return { 
      data: data.map(item => {
      if (item.id === id){
        return {...item, [prop]: !item[prop]}
      }
      return item
    })
  }
})
}

searchHandler = (arr, term)=>{
  if (term.length === 0){
    return arr
  }
  return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1);
}

filterHandler = ()=>{
  
}




updateTermHandler = term => this.setState({term})

render() {
  const {data,term} = this.state
  const allMoviesCount = data.length
  const favouriteMovieCount = data.filter(c => c.favourite).length
  const visibleData = this.searchHandler(data, term)

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo allMoviesCount= {allMoviesCount} favouriteMovieCount = {favouriteMovieCount}/>

        <div className="search-panel">
          <SearchPanel updateTermHandler = {this.updateTermHandler} />
          <AppFilter />
        </div>

        <MovieList onToggleProp = {this.onToggleProp} data ={visibleData} onDelete = {this.onDelete} />
        <MoviesAddForm addForm = {this.addForm} />
      </div>
    </div>
  )
}
}


export default App;

