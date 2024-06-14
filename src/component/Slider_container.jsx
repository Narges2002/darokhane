import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/css/slider_container.css';


const Slider_container = ({ products, slider_type, addOneToBasket, }) => {

    let showPro;
    let h1Elm;

    if (slider_type === 'nw-pr') {
        showPro = products.filter(pro => pro.stock > 50);
        h1Elm = 'جدیدترین محصولات'
    }

    if (slider_type === 'b-sell') {
        showPro = products.filter(pro => pro.stock < 20);
        h1Elm = 'پر فروش ترین محصولات'
    }

    return (
        <div className='slider-c'>
            <p className='new-p'>{ h1Elm }</p>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 4,
                    },
                    960: {
                        slidesPerView: 5,
                    },
                    1120: {
                        slidesPerView: 6,
                    },
                    1280: {
                        slidesPerView: 6.5,
                    }
                }}
            >
                {showPro.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Slide addOneToBasket={addOneToBasket} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

function Slide({ item, addOneToBasket  }) {
    return (
        <Link to={`/:${item.group}/:${item.subgroup}/:${item.id}`} className="slide">
            <div>
                <img src={item.src} alt={item.name} />
                <p>{item.name}</p>
            </div>
            <div>
                <span className='price'>
                    <b>تومان {item.price}</b>
                </span>
                <span onClick={() => addOneToBasket(item)} className='plus'><FaPlusCircle /></span>
            </div>
        </Link>
    )
}

export default Slider_container;