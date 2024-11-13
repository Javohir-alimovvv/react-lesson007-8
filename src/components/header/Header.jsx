import { NavLink, Link } from "react-router-dom"
import "./Header.scss"
import logo from '../../assets/images/logo.png'
import { RiMenu2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React, { memo, useState } from 'react';


const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>

            <header className='Header__big'>
                <div className='container'>
                    <div className="header__top__content">
                        <ul className='header__top__lenks'>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/about"}><span>О компании</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/yetkazish"}><span>Доставка и оплата</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/return"}><span>Возврат</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/kafolat"}><span>Гарантии</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/contact"}><span>Контакты</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/blog"}><span>Блог</span></NavLink></li>
                        </ul>
                        <nav className='navbar'>
                            <a className='nav__tel' href="tel:+998948152522"><span>+998 (94)-815-25-22</span></a>
                            <button className='nav__btn'>Заказать звонок</button>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="header__bottom__content">
                        <HiOutlineMenuAlt3 onClick={toggleSidebar} className='menu__saidbar__icon' />
                        <Link to={"/"}><img src={logo} alt="Logoo" /></Link>
                        <Link to={"/catalog"}><button className='katolog__btn'><RiMenu2Fill className='menu__icon' />Каталог</button></Link>
                        <form className='form__content'>
                            <input className='input__search' type="text" placeholder='Поиск по товарам' />
                            <button className='btn__search'><FiSearch /></button>
                        </form>
                        <div className='icons__group'>
                            <FaRegHeart className='icon__group__icons' />
                            <p className='icon__group__text'>Избранное</p>
                        </div>
                        <div className='icons__group'>
                            <IoMdStats className='icon__group__icons' />
                            <p className='icon__group__text'>Сравнение</p>
                        </div>
                        <div className='icons__group'>
                            <MdOutlineShoppingCart className='icon__group__icons' />
                            <p className='icon__group__text'>Корзина</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form className='form__content__media'>
                        <input className='input__search' type="text" placeholder='Поиск по товарам' />
                        <button className='btn__search'><FiSearch /></button>
                    </form>
                </div>
                <div className="containeryuiug">
                    <div className={`saidbar ${isSidebarOpen ? 'open' : 'closed'}`}>
                        <ul className='header__top__lenks'>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/about"}><span>О компании</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/yetkazish"}><span>Доставка и оплата</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/return"}><span>Возврат</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/kafolat"}><span>Гарантии</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/contact"}><span>Контакты</span></NavLink></li>
                            <li className='header__top__lenks__items'><NavLink className='links' to={"/blog"}><span>Блог</span></NavLink></li>
                        </ul>
                        <button className='katolog__btn'><RiMenu2Fill className='menu__icon' />Каталог</button>
                        <nav className='navbar'>
                            <a className='nav__tel' href="tel:+998948152522"><span>+998 (94)-815-25-22</span></a>
                            <button className='nav__btn'>Заказать звонок</button>
                        </nav>
                    </div>
                </div>
            </header>


        </>
    )
}

export default memo(Header)