import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';
 
function App() {
  return(
    <>
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/generos' element= {<IndiceGeneros />}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}
export default App;