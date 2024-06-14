import '../assets/css/footer.css';
import React, { useRef } from 'react';

function Footer() {

    const inputRef = useRef(null);

    const focusInput = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(() => {
            inputRef.current.focus();
        }, 500);
    };

    return (
        <footer className="footer">
            <div className='footer-left'>
                <div className='btn-top'>
                    <button onClick={() => focusInput()}>بازگشت به بالا</button>
                </div>
                <div>
                    <h3>شنبه تا 5 شنبه، 8 الی 17 پاسخگوی شما هستیم</h3>
                    <p className='phone'>تلفن : 02141971</p>
                    <p>info@sabads.com  : ایمیل</p>
                    <p>مکان : تهران- خیابان دکتر شهید بهشتی، نرسیده به تقاطع سهروردی، پلاک 108</p>
                </div>
            </div>
            <div className='footer-right'>
                <h3>فروشگاه اینترنتی صبا</h3>
                <p>
                    داروخانه آنلاین صبا سهروردی (تأسیس 1387) یک داروخانه اینترنتی است که علاوه بر مکمل های ورزشی ارائه دهنده خدمات دارویی و بهداشتی آنلاین و محصولات تخصصی مراقبت از پوست و مو، زیبایی، آرایشی و عطر و ادکلن با کیفیت بالا میباشد. داروخانه صبا با هدف ارائه دسترسی آسان و سریع به محصولات مورد نیاز شما و همچنین خرید اینترنتی کالاهای داروخانه‌ای، با تیم متخصص و با تجربه، به شما کمک می‌کند تا بهترین محصولات و خدمات را در اختیار داشته باشید. همچنین با مشاوره‌های دارویی توسط تیم متخصص خود، به شما کمک می‌کنیم تا بهترین تصمیم‌ها را در خصوص سلامتی خود بگیرید.
                </p>
            </div>
        </footer>
    )
}

export default Footer