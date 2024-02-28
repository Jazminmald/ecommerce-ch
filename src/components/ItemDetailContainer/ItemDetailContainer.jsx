import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';


export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null)
   


    useEffect(() => {

        getProductById(id)
        .then(response => setItem(response))
      

    }, [])

return (
    <>
       { item && <ItemDetail {...item}/>}
    </>
)

}

