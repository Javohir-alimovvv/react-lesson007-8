import "./Errorlar.scss"
// import { Link } from "react-router-dom"
import errorImg from "../../assets/images/404.png"
import { useNavigate } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from "react";



const Errorlar = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()

  return (
    <>

      <div className="container">
        <div className="Errorlar">
          <div className="img__erroe__box">
            <img className="error__img" src={errorImg} alt="img 404" />
          </div>
          <p className="error__text">Похоже, ничего не нашлось :(</p>
          <button onClick={() => navigate(- 1)} className="enter__btn__ortga"><FaArrowLeftLong className="btn__left__icon" /> возвращаться</button>
          <button onClick={() => navigate("/")} className="enter__home__btn">На главную</button>
        </div>
      </div>

    </>
  )
}

export default Errorlar