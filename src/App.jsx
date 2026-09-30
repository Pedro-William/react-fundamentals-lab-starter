
import './App.css'
import city from './assets/city.jpg'
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName";

function App() {

  return (
    <>
      <div className="App">
        <h1>Section 3</h1>
        <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
        <img src={city} alt="Cidade" />
      </div>
        <ManageData />
        <ListRender/>
        <ConditionalRender/>
        <ShowUserName name = "mateus"/>
      </div>
      
      
    </>
  )
}

export default App
