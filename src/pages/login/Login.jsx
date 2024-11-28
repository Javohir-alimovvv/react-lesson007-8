import React, { useRef } from 'react'
import "./Login.scss"
import axios from 'axios'
import { useStateValue } from "../../context/index"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, dispatch] = useStateValue()
const navigate = useNavigate()
  const userName = useRef(null)
  const password = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    let user = {
      username: userName.current.value,
      password: password.current.value
    }
    console.log(user);
    axios
      .post('https://dummyjson.com/auth/login', user)
      .then(res => {
        dispatch({type: "ADD_TOKEN", payload: res.data.accessToken})
        navigate("/admin/create")
      })
      .catch(err => alert("Username or password is incorrect"))
      .finally()
      userName.current.value = ""
      password.current.value = ""
  }

  return (
    <>

      <div className="container">
        <div className='login'>
          <h2 className='login__text'>Login</h2>
          <form onSubmit={handleSubmit} className='login__form' action="">
            <input ref={userName} className='login__form__input' type="text" placeholder='User' required />
            <input ref={password} className='login__form__input' type="password" placeholder='Password' required />
            <button className='login__form__btn'>Login</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login