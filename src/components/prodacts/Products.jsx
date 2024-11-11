import axios from '../../api'
import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import { toast } from 'react-toastify'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useFetch } from '../../hooks/useFetch'
import "./Products.scss"

const Products = () => {
    const count = 3
    const [category, setCategory] = useState("/")
    const [offset, setOffset] = useState(1)
    const { data, loading, error } = useFetch(`/products${category}`, { limit: offset * count }, [offset, category])
    const { data: categories } = useFetch("/products/category-list")

    useEffect(() => {
        setOffset(1)
    }, [category])

    useEffect(() => {
        AOS.init();
    }, [])


    const categoryItems = categories?.map((item) => (
        <li
            onClick={() => setCategory(`/category/${item}`)}
            className={`items__list ${`/category/${item}` === category ? "items__list__two" : "items__list"}`}
            key={item}>
            {item}
        </li>
    ))

    const productItems = data?.products?.map((pro) => (
        <div data-aos="flip-right" className='products__box__curd' key={pro.id}>        {/* data-aos="" */}
            <img onClick={() => toast.info(pro.description)} className='products__box__curd__img' src={pro.images[0]} alt="" />  {/*onClick={toast.info(pro.description)} */}
            <div className='products__box__curd__groupone'>
                <h3 className='products__box__curd__groupone__name'>{pro.brand}</h3>
                <h3 className='products__box__curd__groupone__prisce'>{pro.price}$</h3>
            </div>
            <div className='products__box__curd__grouptwo'>
                <h3 className='products__box__curd__grouptwo__oshxona'>Cuisine</h3>
                <h3 className='products__box__curd__grouptwo__restaran'>{pro.title}</h3>
            </div>
            <div className='products__box__curd__grouptheree'>
                <button className='products__box__curd__grouptheree__btn'>+</button>
                <h3 className='products__box__curd__grouptheree__raiting'>{pro.title}</h3>
            </div>

        </div>
    ))

    return (
        <>

            <div className='container'>
                <div className='products'>
                    <h3 className='products__text__top'>Menu</h3>
                    <h2 className='products__text__center'>Food Full of treaty Love</h2>
                    <p className='products__text__buttom'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                    <ul className='category__items'>
                        <li onClick={() => setCategory("/")} className={`items__list ${`/` === category ? "items__list__two" : "items__list"}`} >All</li>
                        {
                            categoryItems
                        }
                    </ul>
                    {loading && <Loading count={count} />}
                    <div className='products__box'>
                        {
                            productItems
                        }
                    </div>
                    {
                        offset * count < data?.total &&
                        <button
                            disabled={loading}
                            onClick={() => setOffset(p => p + 1)}
                            className='products__btn'>
                            {loading ? "Loading..." : "See more"}
                        </button>
                    }

                </div>
            </div>

        </>
    )
}

export default Products