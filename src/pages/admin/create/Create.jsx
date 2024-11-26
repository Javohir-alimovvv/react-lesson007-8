import React, { useRef } from 'react'
import "./Create.scss"
import axios from "../../../api"

const Create = () => {

  // title
  //description
  // image
  // price
  // stock
  // pricetwo

  const title = useRef(null)
  const image = useRef(null)
  const price = useRef(null)

  const handleCreateProduct = (e) => {
    e.preventDefault()

    let newProduct = {
      title: title.current.value,
      image: image.current.value,
      price: price.current.value,
      description: "Встраиваемый светильник Novotech",
      stock: 4,
      pricetwo: 50

    }
    axios
      .post("/alimovapi", newProduct)
      .then(res => {
        console.log(res)
        title.current.value = ""
        image.current.value = ""
        price.current.value = ""
      })
      .catch(err => console.log(err))
      .finally()


      title.value = ""
      image.value = ""
      price.value = ""
  }

  return (
    <>

      <div className='create__blog'>
        <h2 className='create__blog__text'>Create Products</h2>
        <form className='create__blog__component' onSubmit={handleCreateProduct} action="">
          <input className='create__blog__component__items' ref={title} type="text" placeholder='Enter title' required />
          <input className='create__blog__component__items' ref={image} type="text" placeholder='Enter url' required />
          <input className='create__blog__component__items' ref={price} type="number" placeholder='Enter price' required />
          <button className='create__blog__component__btn'>Create</button>
        </form>
      </div>

    </>
  )
}

export default Create