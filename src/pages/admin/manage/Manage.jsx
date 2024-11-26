import React from 'react'
import "./Manage.scss"
import { useFetch } from '../../../hooks/useFetch'
import Product from '../../../components/product/Product'

const Manage = () => {
  const { data } = useFetch(`/alimovapi`)



  return (
    <>

      <div className='manage__panel'>
        <h2>Manage Products</h2>
        <Product admin={true} data={data} />
      </div>

    </>
  )
}

export default Manage