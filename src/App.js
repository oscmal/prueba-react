import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miapi from './Components/MiApi';

function App() {
  
  return(
    <>
      <Navbar brand="Rick and Morty"/>
      <div>
        <Miapi/>
      </div>
    </>
  )

}

export default App;
