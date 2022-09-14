import { Routes, Route, HashRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Desc from './components/Desc';
import Cart from './components/Cart'
import Login from './components/Login'
import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState([])
    const onAdd = (product) => {
      const exist = cartItems.find(x => x._id === product._id)
      if(exist) {
        setCartItems(cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty + 1} : x))
      } else {
        setCartItems([...cartItems, {...product, qty: 1}])
      }
    }
    const onRemove = (product) => {
      const exist = cartItems.find(x => x._id === product._id)
      if(exist.qty === 1) {
        setCartItems(cartItems.filter(x => x._id !== product._id))
      } else {
        setCartItems(
          cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty - 1} : x)
        )
      }
    }
    const [oder, setOder] = useState('')
    const deleteCart=() =>{
      if(oder === '') {
        alert('Đăng nhập trước khi đặt hàng !')
      }
      else{
        alert('Đặt hàng thành công !')
        setCartItems([])
      }
    }
    const Out=()=>{
      setOder('')
    }
  
    return (
          <div className="wrapper">
            <Header Out={Out} oder={oder} countCartItems={cartItems.length}/>
           <Routes >
            <Route path='/' element={<Product onAdd={onAdd} />}></Route>
            <Route path='/desc/:slug' element={<Desc onAdd={onAdd} cartItems={cartItems}/>}></Route>
            <Route  path='/cart' element={<Cart deleteCart={deleteCart} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
            <Route path='/login' element={<Login setOder={setOder} />}></Route>
           </Routes>
        </div>
    );
}

export default App;
