import CartWidget from "../CartWidget/CartWidget";
import LogoPeach from "../Logo/LogoPeach";
import './styles.css'


const NavBar = () => {

    return (

        <nav>
        
        <LogoPeach/>
       

        <div>
           
            <button>Conjuntos</button>
            <button>Calzas & shorts</button>
            <button>Remeras & Tops</button>
            <button>Contacto</button>
            <CartWidget/>
        </div>

        
            
        </nav>
    )
}

export default NavBar; 