import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Groups from './components/Pages/Groups';
import Home from './components/Pages/Home';
import MarketPlace from './components/Pages/MarketPlace';
import Video from './components/Pages/Video';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {(location.pathname === '/login' || location.pathname === '/register') ? "" : <Header />}
      <Routes>
        <Route path='/' element={<RequireAuth>
          <Home />
        </RequireAuth>}></Route>
        <Route path='/videos' element={<Video />}></Route>
        <Route path='/groups' element={<Groups />}></Route>
        <Route path='/marketPlace' element={<MarketPlace />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
