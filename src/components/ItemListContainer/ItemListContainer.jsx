import { useEffect, useState } from 'react';
import {getProductById, getProducts} from '../../asyncMock';
import './styles.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {category} = useParams()

    useEffect( () => {

    getProducts()

        .then(resp => 
            {
                if(category){ 
                    const productsFilter= resp.filter(product => product.category === category);
                    setProducts(productsFilter)
                }else{

                    setProducts(resp);
                }

                setIsLoading(false);
            })
       
    }, [category]
    )

    return(

      
       <>

        { isLoading ? <h2>Peach in progress..</h2>  :
        
        
        <ItemList products={products}/>}
            
        </>

    )
}

export default ItemListContainer;
