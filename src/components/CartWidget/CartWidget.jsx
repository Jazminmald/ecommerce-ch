import cartIcon from './assets/cart.png'
import './styles.css'

const CartWidget =()=>{

    return(

        <div className='cart-wid'>
        <img src={cartIcon} alt="cart-widget" />
        0
        </div>
    )
}

export default CartWidget;