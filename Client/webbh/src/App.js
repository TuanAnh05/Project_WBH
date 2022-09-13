import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import DetailProduct from './Page/DetailProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/detailProduct' element={<DetailProduct/>}/>
        </Routes>
      </Router>
     
      </div>
  );
}

export default App;
