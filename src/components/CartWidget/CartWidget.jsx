import { useContext } from 'react'
import cartIcon from './assets/cart.png'
import './styles.css'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";


const CartWidget =()=>{

    const { totalQuantity } = useContext(CartContext)

    return(
        <div>

        <Link to={'/Cart'} className='CartWidget'>
        <img src={cartIcon} alt="cart-widget" className='cartIcon'/>
        {totalQuantity}
        </Link>
        </div>
    )
}

export default CartWidget;