import React from 'react';
import "./post.css"
import Posts from '../posts/Posts';

export default function Post01() {
  return (
    <div className="post">
        <img className="postImg" src="https://wallpaperaccess.com/full/2054031.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">
                CLASSICAL MUSIC
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className="postDesc">
        Classical music, the soulful treasure trove of centuries past, enchants with its timeless melodies and intricate compositions. From the elegance of Bach to the passion of Chopin, it's a journey through the depths of human emotions. These old classics, like fine wine, only grow more precious with age, offering a window into the artistic genius of their creators and an invitation to explore the beauty of the past.
        </p>
    </div>
  )
}