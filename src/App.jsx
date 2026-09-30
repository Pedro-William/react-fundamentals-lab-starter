
import './App.css'
import city from './assets/city.jpg'

function App() {

  return (
    <>
      <div className="App">
        <h1>Section 3</h1>

      </div>
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
        <img src={city} alt="Cidade" />
      </div>
      
    </>
  )
}

export default App
