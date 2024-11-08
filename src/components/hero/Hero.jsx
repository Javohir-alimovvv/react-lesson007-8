import "./Hero.scss"
import caruselImage from "../../assets/images/carusel.png"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { memo, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Hero = () => {
  return (
    <>

      <main className="hero_big">
        <div className="container">
          <div className="hero">
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
                <div className="hero__carusel">
                  <div>
                    <h2 className="hero__title">
                      Скидка 15% на все подвесные светильники
                    </h2>
                    <span className="hero__title__text">до 5 февраля</span>
                  </div>
                  <div>
                    <img className="hero__img" src={caruselImage} alt="image" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__carusel">
                  <div>
                    <h2 className="hero__title">
                      Скидка 15% на все подвесные светильники
                    </h2>
                    <span className="hero__title__text">до 5 февраля</span>
                  </div>
                  <div>
                    <img className="hero__img" src={caruselImage} alt="image" />
                  </div>
                </div>
              </SwiperSlide><SwiperSlide>
                <div className="hero__carusel">
                  <div>
                    <h2 className="hero__title">
                      Скидка 15% на все подвесные светильники
                    </h2>
                    <span className="hero__title__text">до 5 февраля</span>
                  </div>
                  <div>
                    <img className="hero__img" src={caruselImage} alt="image" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>

    </>
  )
}

export default memo(Hero)