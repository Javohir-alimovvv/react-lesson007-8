import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Modul.scss"
import { IoClose } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Modul = ({ data, onClose }) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>

      <div className='modul__parent' >
        <div onClick={onClose} className="modul__overlay"></div>
        <div
          className="modul__content">
          <div className='modul__card'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='modul__card__box'>
                  <img className='modul__card__box__img' src={data?.url} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='modul__card__box'>
                  <img className='modul__card__box__img' src={data?.url} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='modul__card__box'>
                  <img className='modul__card__box__img' src={data?.url} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='modul__card__right'>
              <button className='modul__card__right__close' onClick={onClose}><IoClose /></button>
              <h3 className='modul__card__right__desc'>{data?.description}</h3>
              <Link to={`/product/${data?.id}`}><button className='modul__card__right__detail'>See More</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='modul__card__box'>
        <img className='modul__card__box__img' src={data?.url} alt="" />
      </div>
    </>
  )
}

export default Modul