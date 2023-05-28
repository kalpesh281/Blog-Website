import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'>
      <img 
      className='postImg'
      src='https://st.hzcdn.com/simgs/49c1daf60e9c6021_4-4134/contemporary-exterior.jpg' alt='error'/>

      <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Melodies of the Frozen North: A Musical Journey in the Cold</span>
        <hr/>
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDisc'>In the enchanting land of the Frozen North, music holds a unique power to unite hearts and thaw frozen landscapes. Follow the protagonist, a talented young musician named Lily, as she embarks on a captivating adventure in this wintry realm. Along her journey, Lily discovers a secret music code that has the ability to control the elements and shape the destiny of the region. As she encounters mythical creatures, encounters challenges, and explores breathtaking ice caverns, Lily must harness the power of her melodies to restore harmony to the frozen land and unlock the true potential of her musical abilities. Prepare to be enchanted by the ethereal melodies and witness the transformative power of music in this enchanting tale set in the cold embrace of the Frozen North.




</p>
    </div>
  )
}

export default Post
