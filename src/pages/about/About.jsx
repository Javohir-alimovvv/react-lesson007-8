import React, { memo, useEffect } from 'react'
import "./About.scss"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import logativone from "../../assets/images/logativ1.png"
import logativtwo from "../../assets/images/logativ2.png"
import logativtheree from "../../assets/images/logativ3.png"

import homeone from "../../assets/images/home1.png"
import hometwo from "../../assets/images/home2.png"
import hometheree from "../../assets/images/home3.png"
import { BsArrowUpRight } from "react-icons/bs";




const About = () => {

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
            <h3 className='about__title'>О компании</h3>
          </div>
          <div className='about__bottom__content'>
            <div className='about__bottom__box'>
              <h2 className='about__bottom__box__title'>О компании</h2>
              <div className='about__bottom__box__card'>
                <h3 className='about__bottom__box__card__num'>170+ </h3>
                <p className='about__bottom__box__card__text'>Товаров</p>
              </div>
              <div className='about__bottom__box__card'>
                <h3 className='about__bottom__box__card__num'>1000+  </h3>
                <p className='about__bottom__box__card__text'>Довольных покупателей</p>
              </div>
              <div className='about__bottom__box__card'>
                <h3 className='about__bottom__box__card__num'>170+  </h3>
                <p className='about__bottom__box__card__text'>Товаров</p>
              </div>
            </div>
            <div className='about__bottom__left'>
              <p className='about__text'>
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
              </p>
              <p className='about__text'>
                Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
              <p className='about__text'>
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
              </p>
              <p className='about__text'>
                Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about__two">
          <div className='about__two__gr'>
            <h3 className='about__two__gr__title'>Только проверенные бренды</h3>
            <div className='about__two__gr__box'>
              <button className='about__two__gr__left'><FaArrowLeftLong /></button>
              <button className='about__two__gr__left'><FaArrowRightLong /></button>
            </div>
          </div>
          <div className='about__two__carusl__category'>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativone} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativtwo} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativtheree} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativone} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativtwo} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativtheree} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativone} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativtwo} alt="" />
            </div>
            <div className='about__two__carusl__category__card'>
              <img className='about__two__carusl__category__img' src={logativtheree} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about__theree">
          <div className='category__top'>
            <h3 className='category__top__text'>Блог</h3>
            <button className='category__top__btn'>Перейти в блог <FaArrowRightLong /></button>
          </div>
          <div className='about__theree__box'>
            <div className="about__theree__box__card">
              <div className='about__theree__box__card__img__box'><img className='about__theree__box__card__img' src={homeone} alt="" /></div>
              <div className='about__theree__box__card__group'>
                <h3 className='about__theree__box__card__group__text'>Как правильно освещать дом снаружи?</h3>
                <BsArrowUpRight className='about__theree__box__card__group__icon' />
              </div>
              <p className='about__theree__box__card__group__date'>01.01.2024</p>
            </div>
            <div className="about__theree__box__card">
              <div className='about__theree__box__card__img__box'><img className='about__theree__box__card__img' src={hometwo} alt="" /></div>
              <div className='about__theree__box__card__group'>
                <h3 className='about__theree__box__card__group__text'>Как правильно освещать дом снаружи?</h3>
                <BsArrowUpRight className='about__theree__box__card__group__icon' />
              </div>
              <p className='about__theree__box__card__group__date'>01.01.2024</p>
            </div>
            <div className="about__theree__box__card">
              <div className='about__theree__box__card__img__box'><img className='about__theree__box__card__img' src={hometheree} alt="" /></div>
              <div className='about__theree__box__card__group'>
                <h3 className='about__theree__box__card__group__text'>Как правильно освещать дом снаружи?</h3>
                <BsArrowUpRight className='about__theree__box__card__group__icon' />
              </div>
              <p className='about__theree__box__card__group__date'>01.01.2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(About)