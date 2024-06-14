import '../assets/css/cosmetic.css'
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Cosmetic({products}) {

    let newdata;

    newdata = products.filter(pro => (pro.group === 'cosmetic'))

    const subgroups = [...new Set(newdata.map(pro => pro.subgroup))];

    return (
        <>
            <div className="subgroup-container">
                {subgroups.map((subgroup, index) => (
                    <div key={index} className="subgroup">
                        <Link className='para' to={`/${subgroup}`}>{subgroup}</Link>
                    </div>
                ))}
            </div>

            <div className="comestic-container">
                {
                    newdata.map(item => (
                        <Cosmetic_pro item={item} />
                    ))
                }
            </div>

        </>



    )
}

function Cosmetic_pro({ item }) {
    return (

        <div className="cosmetic-pro">
            <img src={item.src} />
            <p>{item.name}</p>
            <span className='pric'>
                <b>تومان {item.price}</b>
            </span>
            <span className='plus'><FaPlusCircle /></span>
        </div>
    )
}


export default Cosmetic