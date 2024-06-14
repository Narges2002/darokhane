import { FaPlusCircle } from 'react-icons/fa';
import '../assets/css/subgroup.css';
import { Link, useParams } from 'react-router-dom';

function Subgroup({ products, addOneToBasket }) {

    const { subgroup } = useParams();
    const sanitizedSubgroup = subgroup.slice(1)
    const subgroupProducts = products.filter(product => product.subgroup === sanitizedSubgroup);

    return (
        <>
            <h2>{sanitizedSubgroup}</h2>
            <Link className='subgroup-sub' to='' >
                {subgroupProducts.map(item => (
                    <Sub_pro addOneToBasket={addOneToBasket} item={item} />
                ))}
            </Link>
        </>
    );
}

function Sub_pro({ item, addOneToBasket }) {
    return (
        <>
            <Link to={`/:${item.group}/:${item.subgroup}/:${item.id}`} key={item.id} className="cosmetic-pro">
                <img src={`/${item.src}`} />
                <p>{item.name}</p>
                <span className="pric">
                    <b>تومان {(item.price).toLocaleString()}</b>
                </span>
                <span onClick={() => addOneToBasket(item)} className="plus"><FaPlusCircle /></span>
            </Link>
        </>
    )
}

export default Subgroup