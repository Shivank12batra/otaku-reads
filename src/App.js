import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  ProductList,
  ProductDetail,
  UserProfile,
  Cart,
  Wishlist,
  Checkout,
  NoPage,
  Signup,
  Login
} from "./pages";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


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
