import { useEffect, useState } from "react"
import "./Catalog.scss"
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";


const BASE_URL = "https://6731c7fa7aaf2a9aff120907.mockapi.io"

const Catalog = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(()=>{
    axios
      .get(`${BASE_URL}/lesson002`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
      .finally()
  }, [])
  
  const yorilgich = data?.map((pro) => (
    <div key={pro.id} className='category__bottom__card'>
      <div className='category__bottom__left__gr'>
        <h3 className='category__bottom__text'>{pro.title}</h3>
        <button className='category__bottom__btn'>{pro.price}₽ <FaArrowRightLong /></button>
      </div>
      <div className='category__bottom__img__box'>
        <img className='category__bottom__img' src={pro.images[0]} alt="" />
      </div>
    </div>
  ))

  return (
    <>

      <div className="container">
        <div className="category">
          <div className='category__top'>
            <h3 className='category__top__text'>Каталог</h3>
            <button className='category__top__btn'>Весь каталог <FaArrowRightLong /></button>
          </div>
          <div className='category__bottom'>
            {
              yorilgich
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Catalog