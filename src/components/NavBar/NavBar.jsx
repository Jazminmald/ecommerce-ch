import CartWidget from "../CartWidget/CartWidget";
import LogoPeach from "../Logo/LogoPeach";
import { Cart } from "../Cart/Cart";
import './styles.css'
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

        <nav>
        <Link to = '/'>
        <LogoPeach/>
        </Link>

        <div>
           <div className="Categories">
        <Link to={'/category/calzasyshorts'} className={({isActive}) => isActive ? 'ActiveOption' : Option} ><button>Calzas y shorts</button></Link>
        <Link to={'/category/remerasytops'} className={({isActive}) => isActive ? 'ActiveOption' : Option}><button>Remeras y tops</button></Link>
        <Link to={'/category/conjuntos'} className={({isActive}) => isActive ? 'ActiveOption' : Option}><button>Conjuntoss</button></Link>
      
        </div>
        
        <Link to={"/cart"}>
        <CartWidget/>
        </Link>
          
        </div>        
        </nav>
    )
}

export default NavBar; 