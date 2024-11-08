import React, {memo} from 'react'
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import homeone from "../../assets/images/home1.png"
import hometwo from "../../assets/images/home2.png"
import hometheree from "../../assets/images/home3.png"
import { BsArrowUpRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <>

      <div className="container">
        <div className="about">
          <div className='about__top'>
            <Link className='about__home' to={"/"}>Главная</Link>
            <FaChevronRight className='about__icons' />
            <h3 className='about__title'>Блог</h3>
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

export default memo(Blog)