import React, { Link, memo } from 'react'
import "./Footer.scss"
import lagativ from "../../assets/images/logativ4.png"
import footerlogo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <>

      <div className="footer__big">
        <div className="container">
          <div className="footer">
            <div className="footer__content">
              <a href='#'><img className='logofo' src={footerlogo} alt="Footerlogoo" /></a>
              <a className='nav__tel' href="tel:+998948152522"><span>+998 (94)-815-25-22</span></a>
              <img className='lagativfo' src={lagativ} alt="" />
              <p className='footer__text'>Политика конфидециальности</p>
              <p className='footer__text'>Пользовательское соглашение</p>
              <div className='footer__col__gr'>
                <div className='footer__col__gr__radio'>VK</div>
                <div className='footer__col__gr__radio'>VK</div>
                <div className='footer__col__gr__radio'>VK</div>
              </div>
            </div>
            <div className="footer__content">
              <li className='footer__item__top'>Покупателям</li>
              <li className='footer__item'>О компании</li>
              <li className='footer__item'>Доставка и оплата</li>
              <li className='footer__item'>Возврат</li>
              <li className='footer__item'>Гарантии</li>
              <li className='footer__item'>Контакты</li>
              <li className='footer__item'>Блог</li>
            </div>
            <div className="footer__content">
            <li className='footer__item__top'>Товары</li>
              <li className='footer__item'>Люстры</li>
              <li className='footer__item'>Светильники</li>
              <li className='footer__item'>Бра</li>
              <li className='footer__item'>Торшеры</li>
              <li className='footer__item'>Комплектуюшие</li>
              <li className='footer__item'>Настольные лампы</li>
            </div>
            <div className="footer__content">
              <li className='footer__item'>Споты</li>
              <li className='footer__item'>Трековые светильники</li>
              <li className='footer__item'>Уличные светильники</li>
              <li className='footer__item'>Технические светильники</li>
              <li className='footer__item'>Светодиодные ленты</li>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default memo(Footer)