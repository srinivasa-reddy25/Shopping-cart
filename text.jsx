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


 <div className="productsContainer" >
          {produtswithQuantity.map((product) => {
            return <ProductList key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          })}
        </div>