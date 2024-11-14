import { useEffect, useState } from "react"
import "./Catalog.scss"
import { FaArrowRightLong } from "react-icons/fa6";

import { FaArrowLeftLong } from "react-icons/fa6";
import logativone from "../../assets/images/logativ1.png"
import logativtwo from "../../assets/images/logativ2.png"
import logativtheree from "../../assets/images/logativ3.png"

import homeone from "../../assets/images/home1.png"
import hometwo from "../../assets/images/home2.png"
import hometheree from "../../assets/images/home3.png"
import { BsArrowUpRight } from "react-icons/bs";

import axios from "../../api";
import { useFetch } from "../../hooks/useFetch"
import Modul from "../../components/modul/Modul";

const Catalog = () => {
  const { data } = useFetch(`/products`)
  const [show, setShow] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCardClick = (id) => {
    const card = data.find(item => item.id === id);
    setSelectedCard(card);
  };


  const yorilgich = data?.map((pro) => (
    <div key={pro.id}  onClick={() => handleCardClick(pro.id)} className='category__bottom__card'>
      <div className='category__bottom__left__gr'>
        <h3 className='category__bottom__text'>{pro.title}</h3>
        <button className='category__bottom__btn'>{pro.price} ₽ <FaArrowRightLong /></button>
      </div>
      <div className='category__bottom__img__box'>
        <img className='category__bottom__img' src={pro.url} alt="" />
      </div>
    </div>
  ))

  return (
    <>

      <div className="container">
        <div className="category">
          <div className='category__top'>
            <h3 className='category__top__text'>Каталог</h3>
            <button className='category__top__btn'>Весь каталог <FaArrowRightLong /></button>
          </div>
          <div className='category__bottom'>
            {
              yorilgich
            }
          </div>
          {selectedCard && (
            <Modul
              data={selectedCard}
              onClose={() => setSelectedCard(null)}
            />
          )}
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

export default Catalog