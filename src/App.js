import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Groups from './components/Pages/Groups';
import Home from './components/Pages/Home';
import MarketPlace from './components/Pages/MarketPlace';
import Video from './components/Pages/Video';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {(location.pathname === '/login' || location.pathname === '/register') ? "" : <Header />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/videos' element={<Video />}></Route>
        <Route path='/groups' element={<Groups />}></Route>
        <Route path='/marketPlace' element={<MarketPlace />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
