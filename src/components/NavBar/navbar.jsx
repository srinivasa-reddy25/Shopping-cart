import './navbar.css'
import { LuShoppingCart } from "react-icons/lu";

const navbar = ({cart,clearCart,setShowCart}) => {
    const calkTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }
    // console.log(cart.length)
    return(
        <div className="navbar">
            <h1 className="navbar-title">TechShop</h1>
            <button className="navbar-button" onClick={() => setShowCart((prev) => !prev)}><LuShoppingCart/> Cart { calkTotalQuantity()!==0 ? (
                <span className="navbar-button-quantity">{calkTotalQuantity()}</span>
            ):null}</button>
        </div>
    )
}

export default navbar   