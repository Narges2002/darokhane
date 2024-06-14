import '../assets/css/dropdownExample.css'
import { LuMenu } from "react-icons/lu";
import { FaBlogger } from "react-icons/fa"
import { MdOutlinePercent } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


function DropdownExample({ products }) {

  const focusInput = () => {
    window.scrollTo({
        top: 1500,
        behavior: 'smooth'
    });
};

  return (
    <div class="dropdown">
      <ul class="dropdown-content">
        <li>
          <a className='v-blog' href='https://www.sabads.com/blog'>وبلاگ</a>
          <span className='icon'>
            <FaBlogger />
          </span>
        </li>
        <li >
          <a onClick={() => focusInput()}>فروش ویژه</a>
          <span className='icon'>
            <MdOutlinePercent />
          </span>
        </li>
        <li className='drop-container '>
          <a>دسته بندی محصولات</a>
          <span className='icon'>
            <LuMenu />
          </span>
          <ul className='drop-down'>
            <Drop_menu products={products} />
          </ul>
        </li>
      </ul>

    </div>
  );

}


function Drop_menu({ products }) {
  const groups = [...new Set(products.map(pro => pro.group))];

  return (
    <ul>
      {groups.map((group, index) => (
        <li key={index} className='cometic'>
          <Link className='link' to={{
            pathname: `/:${group}`,
            // state: { group }
          }}>
            {group}
          </Link>
          {
            group === "آرایشی و بهداشتی" ? <Sub_Cosmetic group={group} />
              : group === "مکمل غذایی" ? <Sub_Supplement group={group} />
                : group === "مکمل های ورزشی" ? <Sub_Spsupplement group={group} />
                  : group === "محصولات جنسی" ? <Sub_Sexproducts group={group} />
                    : group === "مکمل های تنظیم وزن" ? <Sub_Wrspsupplement group={group} />
                      : group === "مادر و کودک" ? <Sub_Momchild group={group} />
                        : group === "تجهیزات پزشکی" ? <Sub_Medicalequipment group={group} />
                          : null
          }
        </li>
      ))}
    </ul>
  );
}

function Sub_Cosmetic({ group }) {
  return (
    <>
      <div className='sub-cosmetic'>
        <Link to={`/:${group}/:ضد آفتاب`} className='sub-menu'>
          <li className='title'>ضد آفتاب</li>
          <li>ضد افتاب انواع پوست</li>
          <li>پوست خشک و معمولی</li>
          <li>پوسا چرب</li>
        </Link>
        <Link to={`/:${group}/:مرطوب کننده`} className='sub-menu' >
          <li className='title'>مرطوب کننده</li>
          <li>مرطوب کننده دست و صورت</li>
          <li>آبرسان</li>
        </Link>
        <Link to={`/:${group}/:روشن کننده و ضد لک`} className='sub-menu'>
          <li className='title'>روشن کننده و ضد لک</li>
          <li>روشن کننده صورت و بدن</li>
          <li>روشن کننده  دور چشم</li>
        </Link>
        <Link to={`/:${group}/:لوازم بهداشتی`} className='sub-menu'>
          <li className='title'>لوازم بهداشتی</li>
          <li>خوشبو کننده و ضد تعریق</li>
          <li>ضد عفونی کننده دست و سطوح</li>
          <li>اصلاح صورت و بدن</li>
        </Link>

      </div>
    </>
  )
}

function Sub_Supplement({ group }) {
  return (
    <>
      <div className='sub-supplement'>
        <Link to={`/:${group}/:مکمل غذایی`} className='sub-menu'>
          <li className='title'>مکمل رزیمی و غذایی</li>
          <li>مکمل کم خونی</li>
          <li>مکمل تقویت حافظه</li>
          <li>مکمل تقویت سیستم ایمنی</li>
          <li>دیابت</li>
        </Link>
        <Link to={`/:${group}/:مکمل گیاهی`} className='sub-menu' >
          <li className='title'>مکمل گیاهی</li>
          <li>مکمل آقایان</li>
          <li>مکمل بانوان</li>
          <li>مکمل نوزادن</li>
          <li>مکمل لاغری</li>
        </Link>
      </div>
    </>
  )
}

function Sub_Spsupplement({ group }) {
  return (
    <>
      <div className='sub_spsupplement'>
        <ul className='sub-menu'>
          <Link to={`/:${group}/:پروتئین`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            پروتئین
          </Link>
          <Link to={`/:${group}/:کراتین`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            کراتین
          </Link>
          <Link to={`/:${group}/:بی سی ای ای`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            بی سی ای ای
          </Link>
        </ul>
        <ul className='sub-menu' >
          <Link to={`/:${group}/:انرژی زا`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            انرژی زا
          </Link>
          <Link to={`/:${group}/:آمینو اسید`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            آمینو اسید
          </Link>
        </ul>
        <ul className='sub-menu' >
          <Link to={`/:${group}/:PNC`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            PNC
          </Link>
          <Link to={`/:${group}/:ال کارنیتین`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            ال کارنیتین
          </Link>
        </ul>
      </div>
    </>
  )
}

function Sub_Sexproducts({ group }) {
  return (
    <>
      <div className='sub_sexproducts'>
        <ul className='sub-menu'>
          <Link to={`/:${group}/:کاندوم`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            محصولات تاخیری
          </Link>
          <Link to={`/:${group}/:تقویت جنسی آقایان`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            تقویت جنسی اقایان
          </Link>
          <Link to={`/:${group}/:تقویت جنسی خانم ها`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            تقویت جنسی بانوان
          </Link>
        </ul>
        <ul className='sub-menu' >
          <Link to={`/:${group}/:کاندوم`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            کاندوم
          </Link>
        </ul>
      </div>
    </>
  )
}

function Sub_Wrspsupplement({ group }) {
  return (
    <>
      <div className='sub_wrspsupplement'>
        <ul className='sub-menu'>
          <Link to={`/:${group}/:مکمل افزایش وزن`} >
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            افزایش وزن
          </Link>
          <Link to={`/:${group}/:مکمل کاهش وزن`}>
            <span clssName='icon'>
              <FaAngleLeft />
            </span>
            کاهش وزن
          </Link>
        </ul>
      </div>
    </>
  )
}

function Sub_Momchild({ group }) {
  return (
    <>
      <div className='sub_momchild'>
        <Link to={`/:${group}/:لوازم بهداشتی کودک`} className='sub-menu'>
          <li className='title'>لوازم و بهداشت کودک</li>
          <li>مراقبت از پوست کودک</li>
          <li>مراقبت از موی کودک</li>
          <li>لوازم کودک</li>
        </Link>
        <Link to={`/:${group}/:غذای بچه`} className='sub-menu'>
          <li className='title'>غذای کودک</li>
          <li>شیر خشک</li>
          <li>غذای کمکی</li>
        </Link>
      </div>
    </>
  )
}

function Sub_Medicalequipment({ group }) {
  return (
    <>
      <div className='sub_medicalequipment'>
        <Link to={`/:${group}/:دستگاه های خانگی`} className='sub-menu'>
          <li className='title'>دستگاه های خانگی</li>
          <li>فشار سنج</li>
          <li>تست قند</li>
          <li>ترازو</li>
        </Link>
        <Link to={`/:${group}/:نگهداری از چشم و لنز`} className='sub-menu title'>
          نگهداری از چشم و لنز
        </Link>
        <Link to={`/:${group}/:ملزومات پزشکی`} className='sub-menu'>
          <li className='title'>ملزومات پزشکی</li>
          <li>دستکش</li>
          <li>ماسک</li>
          <li>ضد عفونی کننده</li>
        </Link>
      </div>
    </>
  )
}

export default DropdownExample;