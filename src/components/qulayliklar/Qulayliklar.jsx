import React, { memo } from 'react'
import "./Qulayliklar.scss"
import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbNavigationDollar } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { BsUiChecksGrid } from "react-icons/bs";




const Qulayliklar = () => {
    return (
        <>

            <div className="container">
                <div className="qulayliklar">
                    <div className="qulayliklar__top">
                        <h3 className='category__top__text'>Почему NORNLIGHT?</h3>
                        <button className='category__top__btn'>О компании <FaArrowRightLong /></button>
                    </div>
                    <div className='qulayliklar__card__box'>
                        <div className='qulayliklar__card'>
                            <div className='qulayliklar__card__icon__box'><LiaCertificateSolid /></div>
                            <h3 className='qulayliklar__card__text'>Только проверенные бренды</h3>
                            <p className='qulayliklar__card__texttwo'>Бренды, проверенные временем и качеством</p>
                        </div>
                        <div className='qulayliklar__card'>
                            <div className='qulayliklar__card__icon__box'><TbNavigationDollar /></div>
                            <h3 className='qulayliklar__card__text'>Самые низкие цены</h3>
                            <p className='qulayliklar__card__texttwo'>Ниже не будет нигде</p>
                        </div>
                        <div className='qulayliklar__card'>
                            <div className='qulayliklar__card__icon__box'><FaTruckFast /></div>
                            <h3 className='qulayliklar__card__text'>Быстрая доствка</h3>
                            <p className='qulayliklar__card__texttwo'>Доставляем по всей РФ за 1-10 дней</p>
                        </div>
                        <div className='qulayliklar__card'>
                            <div className='qulayliklar__card__icon__box'><BsUiChecksGrid /></div>
                            <h3 className='qulayliklar__card__text'>Большой ассортимент</h3>
                            <p className='qulayliklar__card__texttwo'>Более 1000 товаров</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(Qulayliklar)