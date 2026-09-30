
import './App.css'
import city from './assets/city.jpg'
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

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

        {/* destructuring */}
        <CarDetails brand="Ford" color="Azul" km={10000} />

        {/* reaproveitamento */}
        <CarDetails brand="VW" color="Vermelho" km={535} />
        <CarDetails brand="Fiat" color="Branco" km={0} />
      </div>
      
      
    </>
  )
}

export default App
