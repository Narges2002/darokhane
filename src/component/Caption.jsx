import '../assets/css/caption.css'

function Caption() {

  return (
    <>
      <div className='caption'>

        <Card>
          <div className='txt'>
            <p>تضمین اصالـت کالا
            </p>
            <span>ضمانت سلامت کالا
            </span>
          </div>
          <img src='./src/assets/img/4022bd.png' />
        </Card>
        <Card>
          <div className='txt'>
            <p>ارسال سریع سفارش
            </p>
            <span>ارسال به موقـع کالاها
            </span>
          </div>
          <img src='./src/assets/img/5340776.png' />
        </Card>
        <Card>
          <div className='txt'>
            <p>ارسال کاملا رایــــگان
            </p>
            <span>برای تمامی سفارشات
            </span>
          </div>
          <img src='./src/assets/img/download.jfif' />
        </Card>
        <Card>
          <div className='txt'>
            <p>خدمات پشتیبانی
            </p>
            <span>مرجوع کالا تا 1 روز 
            </span>
          </div>
            <img src='./src/assets/img/icon-phone-01.png' />
        </Card>
        <Card>
          <div className='txt'>
            <p>تا50درصدتخفیف</p>
            <span>بر روی همه محصولات
            </span>
          </div>
          <img src='./src/assets/img/50.jfif' />
        </Card>

      </div>
    </>
  )
}

function Card({ children }) {
  return (
    <>
      <div className="card">
        {children}
      </div>
    </>
  )
}

export default Caption
