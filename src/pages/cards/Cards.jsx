import React from 'react'
import "./Cards.scss"
import { useStateValue } from "../../context"
// import Product from '../../components/product/Product'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import Buyurtma from '../../components/buyurtma/Buyurtma';


const Cards = () => {
  const [state, dispatch] = useStateValue()
  console.log(state.card);

  return (
    <>

      <div className="container">
        <div className="card__home__linea">
          <div className='card__chevrons'>
            <Link className='card__chevrons__link' to={'/'}><span>Главная</span></Link>
            <FaChevronRight className='card__chevrons__link__icon' />
            <Link className='card__chevrons__link' to={'/catalog'}><span>Каталог</span></Link>
            <FaChevronRight className='card__chevrons__text__icon' />
            <span className='card__chevrons__text'>Корзина</span>
          </div>
          <h2 className='card__title__text'>Корзина</h2>
        </div>
      </div>

      <div className="container">
        {
          state.card.lenght === 0 ?
            <div>
              <img src="https://w7.pngwing.com/pngs/936/581/png-transparent-empty-cart-illustration.png" alt="" />
            </div>
            :
            <div className='card__page'>
              <div className='card__page__top__item'>
                <h3 className='card__page__top__item__text'>Фото</h3>
                <h3 className='card__page__top__item__text  text__nimadur'>Товары</h3>
                <h3 className='card__page__top__item__text  text__nimadurtwo'>Описание</h3>
                <h3 className='card__page__top__item__text  text__nimadurtheree'>Описание</h3>
                <h3 className='card__page__top__item__text  text__nimadurfour'>Количество</h3>
              </div>

              <div className='card__overflov__box'>
                {
                  state?.card?.map((item) => (
                    <div className='card__page__box' key={item.id}>
                      <div className='card__page__image__box'>
                        <img className='card__page__image' src={item.image} alt="" />
                      </div>
                      <div className='card__title__gr'>
                        <h3 className='card__title__gr__top__text'>{item.title}</h3>
                        <div className='card__page__about__price__group'>
                          <h3 className='card__page__about__price'>{item.price * item.amount} $</h3>
                          <del className='card__page__about__price__del'>{item.pricetwo * item.amount} $</del>
                        </div>
                      </div>
                      <h3 className='card__page__delete__desc'>{item.description}</h3>
                      <h3 className='card__page__delete__desc__two'>{item.description}</h3>

                      <div className='card__page__about__count__gr'>
                        <button disabled={item.amount <= 0} onClick={() => dispatch({ type: "DEC_CARD", payload: item })} className='card__page__about__count__min'>-</button>
                        <p className='card__page__about__count__value'>{item.amount}</p>
                        <button disabled={item.stock <= item.amount} onClick={() => dispatch({ type: "ADD_CARD", payload: item })} className='card__page__about__count__pil'>+</button>
                      </div>
                      <button onClick={() => dispatch({ type: "REMOVE_CARD", payload: item })} className='card__page__delete__btn'><MdDelete /></button>
                    </div>
                  ))
                }
              </div>
            </div>
        }


      </div>

      <Buyurtma />
    </>
  )
}

export default Cards