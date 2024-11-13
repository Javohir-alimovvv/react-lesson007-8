import React, { useEffect } from 'react'
import "./Detail.scss"
import { useParams } from 'react-router-dom'
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



const Detail = () => {
  const { id } = useParams()
  const { data } = useFetch(`/products/${id}`)
  console.log(data);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <div className="container">
        <div className="detail">
          <div className='about__top'>
            <Link className='about__home' to={"/"}>Главная</Link>
            <FaChevronRight className='about__icons' />
          </div>
          <div className='ditail__group'>
            <div className='img__box'>
              <img className='detail__img' src={data?.url} alt="" />
            </div>
            <div>
              <h2 className='detail__title'>{data?.title}</h2>
              <div className='detail__summa__box'>
                <p className='detail__summa__box__one'>{data?.price} 000 ₽</p>
                <del className='detail__summa__box__two'>{data?.price2} 000 ₽</del>
              </div>
              <p className='description__text'>{data?.description}</p>
              <div>
                <div>
                  <button>-</button>
                  <p></p>
                  <button>+</button>
                </div>
                <button>В корзину</button>
                <button><FaRegHeart /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Detail