import "./Yetkazish.scss"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import xarita from "../../assets/images/xarita.png"
import { memo, useEffect } from "react";

const Yetkazish = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
   }, [])
  return (
    <>


      <div className="container">
        <div className="about">
          <div className='about__top'>
            <Link className='about__home' to={"/"}>Главная</Link>
            <FaChevronRight className='about__icons' />
            <h3 className='about__title'>Доставка и оплата</h3>
          </div>
          <div className='about__bottom__content'>
            <div className='about__bottom__box'>
              <h2 className='about__bottom__box__title'>Доставка и оплата</h2>
            </div>
            <div className='about__bottom__left'>
              <p className='about__text bold'>
                Доставка
              </p>
              <p className='about__text'>
                Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель
              </p>
              <p className='about__text bold'>
                Курьерская доставка
              </p>
              <p className='about__text'>
                БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД
              </p>
              <p className='about__text bold'>
                Самовывоз
              </p>
              <p className='about__text'>
                Любой заказ можно забрать самостоятельно по адресу:г. Москва, Дмитровское шоссе д.100с2
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xarita">
        <img className="xarita__img" src={xarita} alt="xarita" />
      </div>
    </>
  )
}

export default memo(Yetkazish)