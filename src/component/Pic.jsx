import { useEffect, useState } from "react"
import '../assets/css/pic.css'


function Pic() {

  return (
    <>
      <div className='pic'>
        <img src='./src/assets/img/o1.jpeg' />
        <img src='./src/assets/img/o2.jpeg' />
        <img src='./src/assets/img/o3.jpeg' />
        <img src='./src/assets/img/o4.jpeg' />
      </div>
      <SliderAuto />
    </>
  )
}

const imges = [
  './src/assets/img/o1.jpeg',
  './src/assets/img/o2.jpeg',
  './src/assets/img/o3.jpeg',
  './src/assets/img/o4.jpeg'
]

function SliderAuto() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {

        const interVal = setInterval(() => {

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imges.length);

        }, 2000)

        return () => clearInterval(interVal)

    }, [])

    return (
        <>
            <div className="slider-auto">
                <div className="slider">
                    <img src={imges[currentImageIndex]} />
                </div>
            </div>
        </>
    )
}

export default Pic