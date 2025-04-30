import './App.css'
import NavBar from './components/NavBar/navbar.jsx'
import TopContent from './components/TopContent/topContent.jsx'
import ProductList from './components/ProductList/productlist.jsx'
import Cartitem from './components/Cartitem/Cartitem.jsx'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    image: 'https://c0.wallpaperflare.com/preview/1001/145/106/apple-desk-laptop-macbook-pro.jpg',
    description: 'A high-performance laptop suitable for work, gaming, and everyday use.'
  },
  {
    id: 2,
    name: 'Mouse',
    price: 25,
    image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'An ergonomic wireless mouse with precision tracking and long battery life.'
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 75,
    image: 'https://femoi.eu/wp-content/uploads/2019/09/01.jpg',
    description: 'A mechanical keyboard with customizable RGB lighting and tactile feedback.'
  },
  {
    id: 4,
    name: 'Noise-Cancelling Headphones',
    price: 199.99,
    image: "https://c.ndtvimg.com/2019-11/b38nja1g_flip-flops650_625x300_27_November_19.jpg?downsize=545:307",
    description: 'Over-ear headphones with active noise cancellation and high-fidelity sound.'

  }
];

const produtswithQuantity = products.map((product) => {
  return {
    ...product,
    quantity: 0
  }
}
)


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
        <TopContent />
        <div className="productsContainer">
          {produtswithQuantity.map((product) => {
            return <ProductList key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          })}
        </div>
      
      {!showCart ? null : 
         <div className="Cart">
         {isCartempty ? (
           <div className="emptyCart">
             <h2>Cart is empty</h2>
             <p>Add products to the cart to see them here.</p>
           </div>
           ) 
           : 
           <>
           <h2>Cart</h2>
           <ul className="cart-list">
             {cart.map((product)=>{
               return <Cartitem key={product.id} cart={product} addToCart={addToCart} removeFromCart={removeFromCart} />
             })}
             <li className='TotalPrice'>
               <p>Total Price: {cart.reduce((total, product) => total + (product.price) * product.quantity, 0)}</p>
             </li>
           </ul>
           </>
           }
         </div>
      }    
    </div>
  )
}

export default App
