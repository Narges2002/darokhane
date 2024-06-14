import { useParams } from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";
import '../assets/css/product.css'

function Each_pro({products}) {

    const { id } = useParams();
    const sanitizedID = id.slice(1)
    console.log('pppppppp', sanitizedID);
    const newdata = products.filter(product => product.id == sanitizedID);
    console.log(newdata);

    return (
        <div className="each-container">
            {newdata.map(item => (
                <Cosmetic_pro item ={item} />
            ))}
        </div>
    )
}

function Cosmetic_pro({ item, addOneToBasket, addToCart }) {
    return (
        <div className="cosmetic-pro">
            <img src={`/${item.src}`} alt={item.name} />
            <p>{item.name}</p>
            <span className='pric'>
                <b>تومان {(item.price).toLocaleString()}</b>
            </span>
            <span onClick={() => {
                addOneToBasket(item),
                    addToCart
            }} className='plus'><FaPlusCircle /></span>
        </div>
    );
}

export default Each_pro