import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/header.css';
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { IoIosMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { MdSearch } from "react-icons/md";
import { TbCategoryMinus } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../assets/css/dropdownExample.css';

Modal.setAppElement('#root');

function Header({ products, basketOfUser }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const inputRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        if (searchTerm) {
            const filteredSuggestions = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.subgroup.toLowerCase().includes(searchTerm.toLowerCase())
            ).slice(0, 10);
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchTerm, products]);

    const focusInput = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(() => {
            inputRef.current.focus();
        }, 500);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePhoneNumberSubmit = async (phone) => {
        setPhoneNumber(phone);
        console.log(`Phone number submitted: ${phone}`);
        await sendSms(phone);
    };

    const sendSms = async (phone) => {
        try {
            await fetch('https://api.example.com/send-sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone }),
            });
            console.log(`SMS sent to ${phone}`);
        } catch (error) {
            console.error('Error sending SMS:', error);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            const filteredSuggestions = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.subgroup.toLowerCase().includes(searchTerm.toLowerCase())
            ).slice(0, 10);
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchTerm, products]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowSuggestions(false);
        }, 100);
    };

    const handleClick = () => {
        setIsClicked(true);
    };

    useEffect(() => {
        setCounter(basketOfUser.length);
    }, [basketOfUser]);

    return (
        <>
            <header className="header">
                <div className="buttons">
                    <Link to='/basket' onClick={() => (handleClick, setIsClicked(!isClicked))} className={isClicked ? 'basket-clicked' : 'basket'}>
                        <BsCart3 className='bscart' />
                        <span>{counter}</span>
                    </Link>
                    <button className='user-account' onClick={openModal}>
                        <CiUser />
                    </button>
                </div>
                <form className='form'>
                    <span className='search'>
                        <SlMagnifier />
                    </span>
                    <input
                        ref={inputRef} className="input"
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="جستجوی محصولات..."
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="suggestions-list">
                            {suggestions.map(product => (
                                <Link className='sug-menu' key={product.id} to={`/${product.group}/:${product.subgroup}`}>
                                    <li className='sug-l'>{product.name} - {product.group} - {product.subgroup}</li>
                                </Link>
                            ))}
                        </ul>
                    )}
                </form>
                <div className='img-logo'>
                    <img src='./src/assets/img/logo.png' />
                </div>
            </header>
            <Change handleClick={handleClick} focusInput={focusInput} openModal={openModal} />
            <SignUpModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handlePhoneNumberSubmit} />
        </>
    );
}

function Change({ focusInput, openModal, handleClick }) {
    return (
        <div className='change'>
            <div className="menu-stick more" >
                <IoIosMenu />
                <span>بیشتر</span>
                <span id='more'>  تلفن 123456</span>
            </div>
            <div className="menu-stick drop-container">
                <TbCategoryMinus />
                <span>دسته ها</span>
                <DropdownExamplee />
            </div>
            <div className="menu-stick" onClick={openModal}>
                <CgProfile />
                <span>پروفایل</span>
            </div>
            <Link to="/basket" className="menu-stick">
                <CiShoppingCart />
                <span onClick={handleClick}>سبد</span>
            </Link>
            <div onClick={focusInput} className="menu-stick">
                <MdSearch />
                <span>جستجو</span>
            </div>
            <Link to='http://localhost:5173/' className="menu-stick">
                <AiOutlineHome />
                <span>خانه</span>
            </Link>
        </div>
    );
}

function SignUpModal({ isOpen, onRequestClose, onSubmit }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(phoneNumber);
        setPhoneNumber('');
        setSubmitted(true);
        setCountdown(120);
    };

    useEffect(() => {
        if (countdown === 0 && submitted) {
            setSubmitted(false);
        }
    }, [countdown, submitted]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Sign Up Modal"
            className="modal"
            overlayClassName="overlay"
            closeTimeoutMS={500}
        >
            {submitted ? (
                <div>
                    <h2>با تشکر از شما!</h2>
                    <p>کد به شماره وارد شده ارسال شد  {phoneNumber}.</p>
                    <p>شما میتوانید  دوابره کد دریاف کنید بعد از :{countdown} ثانیه.</p>
                    <button type="button" onClick={onRequestClose}>Close</button>
                </div>
            ) : (
                <div>
                    <h2>ورود/ثبت نام</h2>
                    <p>شما می توانید تنها با وارد کردن شماره موبایل خود و دریافت کد ورود، وارد حساب کاربری خود شده و یا عضو شوید. همچنین می توانید با وارد کردن ایمیل کاربری خود وارد حساب کاربری خود شوید .</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            شماره تلفن
                            <br />
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                placeholder='09...'
                            />
                        </label>
                        <button type="submit" disabled={countdown > 0}>ثبت</button>
                        <button type="button" onClick={onRequestClose}>بستن</button>
                    </form>
                </div>
            )}
        </Modal>
    );
}

function DropdownExamplee() {
    return (
        <div className="dropdown-g">
            <ul className="drop-down-g">
                <li className="cometic-g">
                    <Link className="link" to="/ آرایشی و بهداشتی">
                        آرایشی و بهداشتی
                    </Link>
                </li>
                <li className="supplement-g">
                    <Link className="link" to='/ مکمل غذایی'>
                        مکمل غذایی
                    </Link>
                </li>
                <li className="sp-supplement-g">
                    <Link className="link" to="/ مکمل های ورزشی">
                        مکمل های ورزشی
                    </Link>
                </li>
                <li className="sex-product-g">
                    <Link className="link" to="/ محصولات جنسی">
                        محصولات جنسی
                    </Link>
                </li>
                <li className="wr-spsupplement-g">
                    <Link className="link" to="/ مکمل های تنظیم وزن">
                        مکمل های تنظیم وزن
                    </Link>
                </li>
                <li className="mom-child-g">
                    <Link className="link-g" to="/ مادر و کودک">
                        مادر و کودک
                    </Link>
                </li>
                <li className="medical-equipment">
                    <Link className="link" to="/ تجهیزات پزشکی">
                        تجهیزات پزشکی
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
