import React from 'react'
import { useStateValue } from "../../context";
import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import "./Product.scss"

import Modul from '../modul/Modul';

const Product = ({ data }) => {
    const [show, setShow] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null);
    const [state, dispatch] = useStateValue()

    const handleCardClick = (id) => {
        const card = data.find(item => item.id === id);
        setSelectedCard(card);
    };

    const yorilgich = data?.map((pro) => (
        <div key={pro.id} className='category__bottom__card'>
            <div className='category__bottom__left__gr'>
                <h3 className='category__bottom__text'>{pro.title}</h3>
                <div className="category__icons">
                    <button className='category__bottom__btn'>{pro.price} ₽ <FaArrowRightLong /></button>

                    <button onClick={() => dispatch({ type: "ADD_WIShLIST", payload: pro })} className="heart__icon__btn">
                        {state.wishlist?.some(p => p.id === pro.id) ? <FaHeart className='heard__ternory__icon' /> : <FaRegHeart />}
                    </button>


                    <button className="shop__icon__btn"><MdOutlineShoppingCart /></button>
                    {/* <MdShoppingCart /> */}
                </div>
            </div>
            <div className='category__bottom__img__box'>
                <img onClick={() => handleCardClick(pro.id)} className='category__bottom__img' src={pro.url} alt="" />
            </div>
        </div>
    ))

    return (
        <>


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

        </>
    )
}

export default Product