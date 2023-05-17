import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar/NavBar";
import MockmanAPI from "./components/MockmanAPI";
import NoPage from "./components/NoPage";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/mockman' element={<MockmanAPI/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
