import Item from '../Item/Item'


const ItemList = ({products}) => {
    return(
        <div className='d-flex flex-wrap'>
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default ItemList