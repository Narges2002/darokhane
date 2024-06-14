import '../assets/css/product.css'
import { FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

function Products({ products, addOneToBasket }) {
    const { group } = useParams();
    const sanitizedGroup = group.slice(1)


    const newdata = products.filter(product => product.group == sanitizedGroup);
    const subgroups = [...new Set(newdata.map(pro => pro.subgroup))];

    return (
        <>
            <div className="subgroup-container">
                {subgroups.map((subgroup, index) => (
                    <div key={index} className="subgroup">
                        <Link className='para' to={`/${group}/:${subgroup}`}>{subgroup}</Link>
                    </div>
                ))}
            </div>

            <div className="comestic-container">
                {newdata.map(item => (
                    <Cosmetic_pro key={item.id} addOneToBasket={addOneToBasket} item={item} />
                ))}
            </div>
        </>
    );
}

function Cosmetic_pro({ item, addOneToBasket, addToCart }) {
    return (
        <Link to={`/:${item.group}/:${item.subgroup}/:${item.id}`} className="cosmetic-pro">
            <img src={item.src} alt={item.name} />
            <p>{item.name}</p>
            <span className='pric'>
                <b>تومان {(item.price).toLocaleString()}</b>
            </span>
            <span onClick={() => {
                addOneToBasket(item),
                    addToCart
            }} className='plus'><FaPlusCircle /></span>
        </Link>
    );
}

export default Products;
