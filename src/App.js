import './App.css';

import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Cart from './pages/cart/Cart';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
