import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import DetailProduct from './Page/DetailProduct';
import Signin from './Page/Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/detailProduct' element={<DetailProduct/>}/>
          <Route path='/signin' element = {<Signin/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;