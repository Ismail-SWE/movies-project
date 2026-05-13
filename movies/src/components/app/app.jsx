import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";




const App = ()=>{
return (
  <div className="app">
    <div>
      <AppInfo/>
     <div>
      <SearchPanel/>
      <AppFilter/>
     </div> 
    </div>
  </div>


  )
}


export default App;

