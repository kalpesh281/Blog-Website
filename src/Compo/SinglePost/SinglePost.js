import React from 'react'
import './SinglePost.css'

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img src='https://st.hzcdn.com/simgs/49c1daf60e9c6021_4-4134/contemporary-exterior.jpg' alt='error' className='sinlgePostImg' />

                <h1 className='singlePostTitle'>Melodies of the Frozen North: A Musical Journey in the Cold
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : <b>Steve JorJe</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDic'>In the mystical realm of Eternal Ice, where winter reigns eternal, a young prodigy named Amelia discovers an ancient music manuscript buried deep within the ice. Drawn to its enchanting melodies, she embarks on a quest to unlock the secrets hidden within. Guided by a mystical owl companion named Echo, Amelia traverses treacherous landscapes, encountering mythical creatures and overcoming musical challenges along the way.

                    As she plays the magical tunes inscribed in the manuscript, the very fabric of the icy realm begins to resonate with harmonious vibrations. Each melody she masters grants her newfound abilities to manipulate ice, summon blizzards, and even communicate with the spirits of the frozen land.

                    Amelia's journey takes her through magnificent ice palaces, ethereal ice caves, and shimmering frozen lakes, all while battling the nefarious Frost Lord who seeks to silence the power of music forever. Along the way, she befriends a diverse group of musicians and artists, each possessing a unique musical talent that adds depth to their quest.

                    With every challenge they face, Amelia and her companions grow closer, united by their shared love for music and their determination to restore harmony to the realm. Together, they must unravel the mysteries of the music manuscript, confront their own fears, and harness the true potential of their musical gifts to bring warmth, joy, and balance to the frozen world.

                    "Harmony of Frost" is an epic tale of courage, friendship, and the transformative power of music, weaving a captivating narrative set in a mesmerizing icy landscape. It celebrates the universal language of music and reminds us that even in the coldest of places, the warmth of melody can ignite the hearts of all who hear it.</p>
            </div>
        </div>
    )
}

export default SinglePost
