import React, { useEffect } from 'react'
import "./Detail.scss"
import { useParams } from 'react-router-dom'

const Detail = () => {
  // const id = useParams()
  // const { data } = useFetch(`/products/${id}`)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div>Detail</div>
  )
}

export default Detail