import React from 'react'
import "./Manage.scss"
import { useFetch } from '../../../hooks/useFetch'
import Product from '../../../components/product/Product'

const Manage = () => {
  const { data } = useFetch(`/alimovapi`)



  return (
    <>


      <div className='manage__panel'>
        <h2 className='manage__panel__text'>Manage Products</h2>
        <div className="container">
          <div className='category'>
            <Product admin={true} data={data} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Manage