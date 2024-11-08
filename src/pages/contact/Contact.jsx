import React, { memo } from 'react'
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import xarita from "../../assets/images/xarita.png"

const Contact = () => {
  return (
    <>

      <div className="container">
        <div className="about">
          <div className='about__top'>
            <Link className='about__home' to={"/"}>Главная</Link>
            <FaChevronRight className='about__icons' />
            <h3 className='about__title'>Контакты</h3>
          </div>
          <div className='about__bottom__content'>
            <div className='about__bottom__box'>
              <h2 className='about__bottom__box__title'>Контакты</h2>
            </div>
            <div className='about__bottom__left'>
              <a className='nav__tel' href="tel:+998948152522"><span>+998 (94)-815-25-22</span></a>
              <p className='about__text'>Пн-Пт: 10:00 до 19:00: заказ через корзину
                Телефоны:</p>
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

export default memo(Contact)