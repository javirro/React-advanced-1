import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'
import { add, remove } from '../store/dataSlice'
import '../styles/show.css'

const ShowData = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(s => s.user)
  const dataPost = useSelector(s => s.data)

  const logoutHandler = () => {
    console.log(user)
    if (user !== null) {
      dispatch(remove())
      dispatch(logout())
      navigate("/")
    }
  }

  const clickHandler = (p) => { navigate(`/show/${p.id}`) }

  useEffect(() => {
    (async function () {
      const response = await fetch("https://8gag-api.anxoso.com/posts")
      if (response.ok) {
        const data = await response.json()
        dispatch(add(data))
      }
    })()
  }, [dispatch]);

  return (
    <>
      <button className="logout" onClick={logoutHandler}>LOGOUT</button>
      <div className='show'>
        <h2 className='title'> ALL PUBLISHED POST </h2>
        {dataPost !== null && dataPost !== undefined && dataPost !== [] &&
          <div className='post-ids'>
            {dataPost.map((post) => <button key={post?.id} classNa me="post-bt" onClick={() => clickHandler(post)}> {post?.id}</button>)}
          </div>}
        <span style={{ "color": "white", "fontWeight": "bold", "marginTop": "55px" }}> User token: {user}</span>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default ShowData