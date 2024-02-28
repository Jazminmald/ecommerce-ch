const products = [
    {
        id: '1',
        name: 'Calza Jazmin',
        price: 15000,
        category: 'calzasyshorts',
        img: '',
        stock: 25,
        description: 'Calza corta deportiva'
    },
    {
        id: '2',
        name: 'Calza Florencia',
        price: 18000,
        category: 'calzasyshorts',
        img: '',
        stock: 10,
        description: 'Calza corta deportiva floreada'
    },
    {
        id: '3',
        name: 'Calza Rosina',
        price: 15000,
        category: 'calzasyshorts',
        img: '',
        stock: 10,
        description: 'Calza corta deportiva fucsia'
    },
    {
        id: '4',
        name: 'Conjunto Universo',
        price: 40000,
        category: 'conjuntos',
        img: '',
        stock: 2,
        description: 'Calza corta deportiva fucsia'
    },

{
        id: '5',
        name: 'Conjunto Selva',
        price: 35000,
        category: 'conjuntos',
        img: '',
        stock: 3,
        description: 'Calza corta deportiva fucsia'
    },
{
        id: '6',
        name: 'Conjunto Viajero',
        price: 30000,
        category: 'conjuntos',
        img: '',
        stock: 12,
        description: 'Calza corta deportiva fucsia'
    },
{
        id: '7',
        name: 'Conjunto Sencillita',
        price: 46000,
        category: 'conjuntos',
        img: '',
        stock: 5,
        description: 'Calza corta deportiva fucsia'
    },

{
        id: '8',
        name: 'Remera Alegria ',
        price: 19000,
        category: 'conjuntos',
        img: '',
        stock: 5,
        description: 'Calza corta deportiva fucsia'
    },
{
        id: '9',
        name: 'Top potra',
        price: 12000,
        category: 'remerasytops',
        img: '',
        stock: 5,
        description: 'Calza corta deportiva fucsia'
    },

]

export const getProducts = () => { 
    return new Promise((resolve, reject) => {
        if(products.length > 0){

            setTimeout( () => {
                resolve(products);
            }, 2000 )
        } else {

            reject("No hay productos");

        }
    })
}

export const getProductById = (id) => {

    return new Promise ( (resolve, reject) => {

        if(products.length > 0 ) {
            const product = products.find( (p) => p.id == id);
             setTimeout(()=> {
             if (!product) {
            reject("No se encuentra el producto");
            } else{ 
                
            resolve(product);
         }
       
      }, 2000);
    } else{
        reject("No hay productos");
    }
});
};
