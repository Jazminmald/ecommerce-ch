import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
    {
     
        name: 'Calza Jazmin',
        price: 15000,
        category: 'calzasyshorts',
        img: 'https://i.imgur.com/us6DpMG.jpeg',
        stock: 25,
        description: 'Calza corta deportiva'
    },
    
    {
      
        name: 'Short Justina',
        price: 20000,
        category: 'calzasyshorts',
        img: 'https://acdn.mitiendanube.com/stores/429/781/products/124-short-justina-fucsia11-9e5989c20c42ea5b5916401177303677-1024-1024-08bb92856fdf20405c16478746406920-480-01-6311d45269535c895216595416189863-640-0.jpg',
        stock: 25,
        description: 'Short deportivo'
    },

    {
      
        name: 'Calza Florencia',
        price: 18000,
        category: 'calzasyshorts',
        img: 'https://i.imgur.com/uWWC7Tv.jpeg',
        stock: 10,
        description: 'Calza corta deportiva floreada'
    },
    {
    
        name: 'Calza Rosina',
        price: 15000,
        category: 'calzasyshorts',
        img: 'https://i.imgur.com/rKejn6o.jpeg',
        stock: 10,
        description: 'Calza corta deportiva fucsia'
    },
    {
 
        name: 'Conjunto Universo',
        price: 40000,
        category: 'conjuntos',
        img: '',
        stock: 2,
        description: 'Calza corta deportiva fucsia'
    },

{
      
        name: 'Conjunto Selva',
        price: 35000,
        category: 'conjuntos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_828559-MLA52006261560_102022-O.webp',
        stock: 3,
        description: 'Conjunto deportivo top y short'
    },
{
  
        name: 'Conjunto Viajero',
        price: 30000,
        category: 'conjuntos',
        img: 'https://verteseler.com/cdn/shop/products/dfa25311.png?v=1695432477',
        stock: 12,
        description: 'Conjunto negro'
    },
{

        name: 'Conjunto Sencillita',
        price: 46000,
        category: 'conjuntos',
        img: 'https://falabella.scene7.com/is/image/FalabellaCO/gsc_122517475_3362989_1?wid=800&hei=800&qlt=70',
        stock: 5,
        description: 'Conjunto gris importado '
    },

{
      
        name: 'Remera Alegria ',
        price: 19000,
        category: 'remerasytops',
        img: 'https://acdn.mitiendanube.com/stores/239/344/products/remera-deportiva-mujer-manga-corta-iguazu-ppal-fucsia1-a1b3e2fa1d4c30e15116546266359682-640-0.jpg',
        stock: 5,
        description: 'Remera deportiva fucsia'
    },
{
        name: 'Top potra',
        price: 12000,
        category: 'remerasytops',
        img: 'https://www.digitalsport.com.ar/files/products/65a66166090b6-644365-280x280.jpg',
        stock: 5,
        description: 'Top deportivo'
    },
    {
       
        name: 'Top luna',
        price: 10000,
        category: 'remerasytops',
        img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/677b7a34ebaf42ceb2a9af5d0142a1e5_9366/top-deportivo-yoga-studio-luxe-soporte-ligero.jpg',
        stock: 5,
        description: 'Top deportivo'
    },

    {
       
        name: 'Conjunto Bariloche',
        price: 62000,
        category: 'conjuntos',
        img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cacbb68a54d14637b2d6ae8c005c8f75_9366/w-lin-ft-ts.jpg',
        stock: 5,
        description: 'Conjunto deportivo ideal para el invierno'
    },


]

export const seedProducts = () => {
    
    products.forEach(product => {

        addDoc(collection(db, "products"), product)
        
    });
}