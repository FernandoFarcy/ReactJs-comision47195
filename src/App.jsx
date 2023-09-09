import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemsListContainer from './Componentes/ItemsListContainer/ItemsListContainer'
import Card1 from './Componentes/Cards/Card1'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <NavBar />
      <ItemsListContainer greeting="Bienvenidos"/>
       <h1> Componentes      </h1>
       <Card1 />
    </div>
    )
}

export default App
