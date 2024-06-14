import { useEffect, useState } from "react"
import '../assets/css/slider_auto.css'

const imges = [
    "./src/assets/img/1.jpeg",
    "./src/assets/img/4.jpeg",
    "./src/assets/img/5.jpeg",
    "./src/assets/img/6.jpeg"
]

function Slider_auto() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {

        const interVal = setInterval(() => {

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imges.length);

        }, 2000)

        return () => clearInterval(interVal)

    }, [])

    return (
        <>
            <div className="slider-container">
                <div className="slider">
                    <img src={imges[currentImageIndex]} />
                </div>
                <div className="images">
                    <img src="./src/assets/img/2.jpeg" />
                    <img src="./src/assets/img/3.jpeg" />
                </div>
            </div>
        </>
    )
}

export default Slider_auto