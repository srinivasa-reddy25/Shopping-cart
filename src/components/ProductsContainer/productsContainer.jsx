import { useContext } from 'react';
import './index.css'
import ProductList from '../ProductList/productlist'
import BuildContext from '../../BuildContext'

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
})


const ProductsContainer=()=>{
    const {addToCart,removeFromCart}=useContext(BuildContext)
    return(
        <div className="productsContainer" >
            {produtswithQuantity.map((product) => {
            return <ProductList key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
            })}
        </div>
    )
}

export default ProductsContainer;