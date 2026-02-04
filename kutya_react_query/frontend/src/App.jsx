import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Kutyanevek from './components/Kutyanevek';
import Menu from './components/Menu';
import Main from './components/Main';
import KutyanevForm from './components/Forms/KutyanevForm';

function App() {


  return (
    <div>

       <BrowserRouter>
          <Menu />
          <Routes>

            <Route path='/' element={<Main />} />
            <Route path='/kutyanevek' element={<Kutyanevek />} />

            <Route path='/kutyanevform' element={<KutyanevForm /> } />

            <Route path='*' element={<Navigate to={"/"} />} />

          </Routes>
          </BrowserRouter>

      
    </div>
     
  )
}

export default App
