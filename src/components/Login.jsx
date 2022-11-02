import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/userSlice"
import '../styles/home.css'
import { useNavigate  } from "react-router-dom"

const Login = () => {
  const api = "https://8gag-api.anxoso.com"
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  console.log("user:", user)

  const navigate = useNavigate()
  const userNameChange = (e) => { setUserName(e.target.value) }
  const passwordChange = (e) => { setPassword(e.target.value) }

  const submitHandler = async (e) => {
    e.preventDefault()

    const signup = "/signup"
    const bodyData = JSON.stringify({
      username: userName,
      password: password,
    })
    const response = await fetch(api + signup,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: bodyData,
      })
    if (response.ok) {
      const data = await response.json()
      dispatch(login(data.token))
      navigate("/show")
    }
    else {
      const data = await response.json()
      if (data.error === "User already exists") {
        const response = await fetch(api + "/login",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: bodyData,
          })
          const data = await response.json()
          dispatch(login(data.token))
          navigate("/show")
      }
      else {
        alert(data.error)
      }
    }
  }
  return (
    <div className="home">
      <form onSubmit={submitHandler} className="home">
        <input type="text" value={userName} placeholder="Username" onChange={userNameChange} />
        <input type="password" value={password} placeholder="Password" onChange={passwordChange} />
        <button className="signup">Sign up</button>
      </form>
    </div>
  )
}

export default Login