import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../styles/show.css'

const PostData = () => {
  const { id } = useParams()
  const data = useSelector(s => s.data)
  const dataToShow = data.find((d) => String(d.id) === id)

  return (
    <div className="post-img-container">
      <h2>Image for Post with id: {id}</h2>
      {dataToShow !== null &&
        <div className='show-img'>
          <img src={dataToShow?.image} alt="post data"></img>
        </div>}
    </div>
  )
}

export default PostData