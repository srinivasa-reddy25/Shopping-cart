import './Cartitem.css';

const Cartitem = ({cart,addToCart,removeFromCart}) => {
    if(cart.quantity === 0) {
        return null;
    }
    return(
        <li className="cart-item">
            <img src={cart.image} alt="product-image" />
            <div className="cart-item-details">
                <h2>{cart.name}</h2>
                <p>{cart.description}</p>
            </div>
            <div className='quetity-container'>
                <button className='secondsubButton' onClick={() => removeFromCart(cart)}>-</button>
                <p className='quantity'>{cart.quantity}</p>
                <button className='secondaddButton' onClick={() => addToCart(cart)}>+</button>                
            </div>
        </li>
    )
}

export default Cartitem;
