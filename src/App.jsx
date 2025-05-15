import './App.css'
import NavBar from './components/NavBar/navbar.jsx';
import TopContent from './components/TopContent/topcontent.jsx';
import { useState } from 'react'
import CartContainer from './components/CartContainer/cartContainer.jsx'
import BuildContext from './BuildContext.jsx'
import ProductsContainer from './components/ProductsContainer/productsContainer.jsx'



function App() {
  const [cart, setCart] = useState([]);
  const [isCartempty, setIsCartEmpty] = useState(true);
  const [showCart, setShowCart] = useState(false);
  
  const addToCart = (product) => {
    setIsCartEmpty(false);
    if (product.quantity > 0) {
      cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += 1
        }
      })
      setCart([...cart])
    }
    else {
      product.quantity += 1
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    if(cart.reduce((total,product)=> total + product.quantity,0) === 1){
      setIsCartEmpty(true);
    }

    if (product.quantity === 1) {
      product.quantity -= 1
      setCart(cart.filter(item => item.id !== product.id));
    }
    else if (product.quantity >0 ) {
      cart.map((item) => {
        if (item.id === product.id) {
          item.quantity -= 1
        }
      })
      setCart([...cart])
    }
    else {
      console.log('product.quantity')
      console.log('else')
      setCart(cart.filter(item => item.id !== product.id));
      console.log(cart)
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
      <div className="App">
        <NavBar cart={cart} clearCart={clearCart} setShowCart={setShowCart}/>
        <TopContent/>
        
        <BuildContext.Provider value={{
          removeFromCart,
          addToCart,
        }}>
          <ProductsContainer />
        </BuildContext.Provider>

        <BuildContext.Provider value={{
          isCartempty,
          cart,
          setShowCart,
          removeFromCart,
          addToCart
        }}>
          {showCart && <CartContainer/>}  
        </BuildContext.Provider>
    </div>
  )
}

export default App
