import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductList from "./components/ProductList/ProductList";
import UserProfile from "./components/UserProfile";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import MockmanAPI from "./components/MockmanAPI";
import NoPage from "./components/NoPage";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route exact element={<PrivateRoute/>}>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mockman' element={<MockmanAPI/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
