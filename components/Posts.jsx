import React from 'react'
import Post from './Post'
//Example 
const posts = [
    {
        id:'123',
        username:'Tor',
        userImg: 'https://i.pinimg.com/originals/ce/a0/4c/cea04c899c634019320bca5c72e0319a.jpg',
        img: 'https://i.pinimg.com/originals/ce/a0/4c/cea04c899c634019320bca5c72e0319a.jpg',
        caption:'Suscribe and destroy the like button!'
    },
    {
        id:'456',
        username:'Tor2',
        userImg: 'https://i.pinimg.com/originals/ce/a0/4c/cea04c899c634019320bca5c72e0319a.jpg',
        img: 'https://i.pinimg.com/originals/ce/a0/4c/cea04c899c634019320bca5c72e0319a.jpg',
        caption:'Suscribe and destroy the like button! 2'
    }
]

function Posts() {
  return (
    <div>
      
    {posts.map(post => (
        
        <Post key={post.id} 
        id={post.id} 
        username={post.username} 
        userImg={post.userImg} 
        img={post.img} 
        caption={post.caption}/>
        

    ))}

        
    </div>
  )
}

export default Posts