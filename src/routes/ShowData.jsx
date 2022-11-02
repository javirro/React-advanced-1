import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'
import '../styles/show.css'
import { useCountDown } from '../hooks/useCountDown'

const ShowData = () => {
  const [allposts, setAllPosts] = useState(null)
  const [post, setPost] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(s => s.user)
  const time = useCountDown(10,0)

  const logoutHandler = () => {
    if (user !== null) {
      dispatch(logout())
      navigate("/")
    }
  }

  const clickHandler = (p) => { setPost(p) }

  useEffect(() => {
    (async function () {
      const response = await fetch("https://8gag-api.anxoso.com/posts")
      if (response.ok) {
        const data = await response.json()
        setAllPosts(data)
      }
      else setAllPosts(undefined)
    })()
  }, []);

  return (
    <>
      <button className="logout" onClick={logoutHandler}>LOGOUT</button>
      <div className='show'>
        <h2 className='title'> SHOWING DATA </h2>
        {allposts !== null && allposts !== undefined &&
          <div className='post-ids'>
            {allposts.map((post) => <button key={post?.id} className="post-bt" onClick={() => clickHandler(post)}> {post?.id}</button>)}
          </div>}

        {post !== null &&
          <div className='show-img'>
            <img src={post.image} alt="post data"></img>
          </div>}
        <span style={{ "color": "white", "font-weight": "bold", "margin-top": "55px" }}> User token: {user}</span>
        <span>{time}</span>
      </div>

    </>
  )
}

export default ShowData