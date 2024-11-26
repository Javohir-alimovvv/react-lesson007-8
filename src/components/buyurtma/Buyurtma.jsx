import React from 'react'
import "./Buyurtma.scss"


const Buyurtma = () => {
    return (
        <>

            <div className="container">
                <div className="buyurtma">
                    <h3 className='buyurtma__title'>Оформление</h3>
                    <div className='buyurtma__reg__group'>
                        <input className='buyurtma__reg__group__content' type="text" placeholder='ФИО' />
                        <input className='buyurtma__reg__group__content' type="tel" placeholder='телефон' />
                        <input className='buyurtma__reg__group__content' type="email" placeholder='Электронная почта' />
                    </div>
                    <div className='buyurtma__lenia'></div>
                    <h3 className='buyurtma__title'>Доставка</h3>
                    <input className='buyurtma__adres' type="text" placeholder='Адрес доставки' />
                    <textarea
                        placeholder="Комментарий"
                        rows="4"
                        className='buyurtma__cament'>
                    </textarea>
                </div>
            </div>

            <div className="container">
                <div className="tolov">
                    <h3 className='buyurtma__title'>Оплата</h3>
                    <div className='tolov__top__content'>
                        <div className='tolov__top__content__gr'>
                            <h3 className='tolov__top__content__text'>Товары.............................................</h3>
                            <h3 className='tolov__top__content__text'>12 300₽</h3>
                        </div>
                        <div className='tolov__top__content__gr'>
                            <h3 className='tolov__top__content__text'>Доставка..............................................</h3>
                            <h3 className='tolov__top__content__text'>580₽</h3>
                        </div>
                    </div>
                    <h3 className='tolov__price'>12 800₽</h3>
                    <div className='tolov__sucsses'>
                        <button className='tolov__sucsses'>Купить</button>
                        <div className='tolov__sucsses__gr'>
                            <input className='radio' type="radio" />
                            <p className='tolov__sucsses__gr__text'>Я согласен наобработку моих персональных данных</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Buyurtma