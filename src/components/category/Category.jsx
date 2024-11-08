import React, { memo } from 'react'
import "./Category.scss"
import { FaArrowRightLong } from "react-icons/fa6";
import lampa from "../../assets/images/lampa1.png"
import lampa2 from "../../assets/images/lampa2.png"
import lampa3 from "../../assets/images/lampa3.png"
import lampa4 from "../../assets/images/lampa4.png"
import lampa5 from "../../assets/images/lampa5.png"
import lampa6 from "../../assets/images/lampa6.png"
import lampa7 from "../../assets/images/lampa7.png"
import lampa8 from "../../assets/images/lampa8.png"
import lampa9 from "../../assets/images/lampa9.png"
import lampa10 from "../../assets/images/lampa10.png"
import lampa11 from "../../assets/images/lampa11.png"


const Category = () => {
    return (
        <>

            <div className="container">
                <div className="category">
                    <div className='category__top'>
                        <h3 className='category__top__text'>Каталог</h3>
                        <button className='category__top__btn'>Весь каталог <FaArrowRightLong /></button>
                    </div>
                    <div className='category__bottom'>
                        <div className='category__bottom__card'>
                            <div className='category__bottom__left__gr'>
                                <h3 className='category__bottom__text'>Люстры</h3>
                                <button className='category__bottom__btn'>От 540₽ <FaArrowRightLong /></button>
                            </div>
                            <div className='category__bottom__img__box'>
                                <img className='category__bottom__img' src={lampa} alt="" />
                            </div>
                        </div>
                        <div className='category__bottom__card'>
                            <div className='category__bottom__left__gr'>
                                <h3 className='category__bottom__text'>Светильники</h3>
                                <button className='category__bottom__btn'>От 540₽ <FaArrowRightLong /></button>
                            </div>
                            <div className='category__bottom__img__box'>
                                <img className='category__bottom__img' src={lampa2} alt="" />
                            </div>
                        </div>
                        <div className='category__bottom__card'>
                            <div className='category__bottom__left__gr'>
                                <h3 className='category__bottom__text'>Бра</h3>
                                <button className='category__bottom__btn'>От 540₽ <FaArrowRightLong /></button>
                            </div>
                            <div className='category__bottom__img__box'>
                                <img className='category__bottom__img' src={lampa3} alt="" />
                            </div>
                        </div>
                        <div className='category__bottom__card'>
                            <div className='category__bottom__left__gr'>
                                <h3 className='category__bottom__text'>Торшеры</h3>
                                <button className='category__bottom__btn'>От 540₽ <FaArrowRightLong /></button>
                            </div>
                            <div className='category__bottom__img__box'>
                                <img className='category__bottom__img' src={lampa4} alt="" />
                            </div>
                        </div>
                        <div className='category__bottom__card'>
                            <div className='category__bottom__left__gr'>
                                <h3 className='category__bottom__text'>Настольные лампы</h3>
                                <button className='category__bottom__btn'>От 540₽ <FaArrowRightLong /></button>
                            </div>
                            <div className='category__bottom__img__box'>
                                <img className='category__bottom__img' src={lampa5} alt="" />
                            </div>
                        </div>
                        <div className='category__bottom__card'>
                            <div className='category__bottom__left__gr'>
                                <h3 className='category__bottom__text'>Споты</h3>
                                <button className='category__bottom__btn'>От 540₽ <FaArrowRightLong /></button>
                            </div>
                            <div className='category__bottom__img__box'>
                                <img className='category__bottom__img' src={lampa6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(Category)