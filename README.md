# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 <div className="Cart">
        <h2>Cart</h2>
        <ul className="cart-list">
          {cart.map((product)=>{
            return <Cartitem key={product.id} cart={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          })}
          <li className='TotalPrice'>
            <p>Total Price: {cart.reduce((total, product) => total + product.price, 0)}</p>
          </li>
          {/* <Cartitem cart={products[0]} addToCart={addToCart} removeFromCart={removeFromCart} quantity={numberOfItemsofspecificProduct(products[0].id)}/> */}
        </ul>
      </div>
      