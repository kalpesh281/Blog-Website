
import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'

function Post({ posts }) {
  const PF = "https://blog-backend-btcn.onrender.com/images/"

  return (
    <div className='post'>
      {posts.photo && (
        <img
          className='postImg'
          src={PF + posts.photo} alt='error' />
      )}

      <div className='postInfo'>
        <div className='postCats'>
          {posts.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}

        </div>
        <Link to={`/post/${posts._id}`} className='link' >
          <span className='postTitle'>{posts.title}</span>
        </Link>
        <hr />
        <span className='postDate'>{(posts.createdAt)}</span>
      </div>
      <p className='postDisc'>{posts.desc}
      </p>
    </div>
  )
}

export default Post
