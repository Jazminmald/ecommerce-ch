
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { CheckOut } from './components/CheckOut/CheckOut';





function App() {

  return (
 
    <div className='App'> 

    <BrowserRouter>
    <CartContextProvider>
    
    <NavBar className='nav-bar'/>

    <Routes>

     <Route path='/' element = {<ItemListContainer />}/>
     <Route path='/cart' element = {<Cart/>}/>
     <Route path='/category/:category' element = {<ItemListContainer/>}/>
     <Route path='/Item/:id' element = {  < ItemDetailContainer/>}/>
     <Route path='*' element = {<h1>404 NOT FOUND</h1>}/>
     <Route path='/checkout' element={<CheckOut/>}/>

    </Routes>
    </CartContextProvider>
    </BrowserRouter>
  </div>

  );
 
}

export default App;
