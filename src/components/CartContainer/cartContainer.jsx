import './index.css'
import { useContext } from 'react'
import Cartitem from '../Cartitem/Cartitem'
import BuildContext from '../../BuildContext'
import { ImCross } from "react-icons/im";


const CartContainer = () => {
    const { isCartempty, cart, removeFromCart, addToCart, setShowCart } = useContext(BuildContext)

    const conClickingCloseButton = () => {
        setShowCart((prev) => (!prev));
    }

    return (
        <div className="Cart" >
            <div className='cartcontent'>
                <div className='HiddingCart' onClick={conClickingCloseButton}>
                    <ImCross />
                </div>
                {isCartempty ?
                    <div className="emptyCart">
                        <h2>Cart is empty</h2>
                        <p>Add products to the cart to see them here.</p>
                    </div>
                    :
                    <>
                        <h2>Cart</h2>
                        <ul className="cart-list">
                            {cart.map((product) => {
                                return <Cartitem key={product.id} cart={product} addToCart={addToCart} removeFromCart={removeFromCart} />
                            })}
                            <li className='TotalPrice'>
                                <p>Total Price: {cart.reduce((total, product) => total + (product.price) * product.quantity, 0)}</p>
                            </li>
                        </ul>
                    </>
                }
            </div>
        </div>
    )
}

export default CartContainer;