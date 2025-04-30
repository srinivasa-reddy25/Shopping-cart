import './productlist.css';

const ProductList = ({ product, addToCart, removeFromCart }) => {
    // console.log(quantity    )
    // console.log(product)
    return (
        <div className="productCard">
            <div className='imageContainer'>
                <img src={product.image} alt="laptop-image" />
            </div>

            <div className='productDiscription'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
            <div className='productPrice'>
                <h3>$ {product.price}</h3>
                {product.quantity > 0 ?
                    <div className='anotherButton'>
                        <button className='secondsubButton' onClick={() => removeFromCart(product)}>-</button>
                        <p className='quantity'>{product.quantity}</p>
                        <button className='secondaddButton' onClick={() => addToCart(product)}>+</button>
                    </div>
                    :
                    <button className='addButton' onClick={() => addToCart(product)}>+</button>
                }
            </div>
        </div>
    )
}

export default ProductList;
