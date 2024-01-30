
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'



function App() {

  return (
 
  <div className='App'> 

  
    
    <NavBar className='nav-bar'/>

    <ItemListContainer greeting={'Bienvenidos a la tienda online de Peach'}/>
    
   </div>
  );
 
}

export default App;
