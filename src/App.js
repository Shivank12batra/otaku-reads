import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import MockmanAPI from "./components/MockmanAPI";
import NoPage from "./components/NoPage/NoPage";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mockman' element={<MockmanAPI/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route exact element={<PrivateRoute/>}>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
