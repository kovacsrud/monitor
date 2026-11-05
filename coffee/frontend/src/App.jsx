import Main from "./components/Main"
import Menu from "./components/Menu"
import Coffees from "./components/Coffees"
import CoffeeForm from "./components/CoffeeForm"
import CoffeeForm2 from "./components/CoffeeForm2"

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/coffees" element={<Coffees />} />
           <Route path="/coffeeform" element={<CoffeeForm2 />} />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
