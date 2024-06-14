import '../assets/css/cosmetic.css'
import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

function MotherChild() {

    const [products, setProducts] = useState([]);
    let newdata;

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                console.log('data:', data)
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, []);

    newdata = products.filter(pro => (pro.group === 'mother and child'))

    return (
        <>
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


export default MotherChild