import React, { useState } from "react"
// eslint-disable-next-line linebreak-style
import "../styles/Blog.css"
import blogService from "../services/blogService"

const Blog = ({ blog, removeBlog, testHandler }) => {
    const [showFull, setShowFull] = useState(false)
    const [likes, setLikes] = useState(blog.likes)

    const handleLike = async () => {
        try {
            setLikes(likes + 1)
            await blogService.likeBlog({
                ...blog,
                likes: likes + 1,
            })

        } catch (error) {
            console.log(error)
        }
    }
    if (!showFull) {
        return (
            <div className="Blog">
                {blog.title} {blog.author}
                <button onClick={() => setShowFull(!showFull)}>view</button>
            </div>
        )
    } else {
        return (
            <div className="Blog">
                <p>{blog.title}</p>
                <button onClick={() => setShowFull(!showFull)}>hide</button>
                <p>{blog.url}</p>
                <p className="likes">
                    {likes} <button onClick={() => {
                        handleLike()
                        testHandler()
                    }}>like</button>
                </p>
                <p>{blog.author}</p>
                <button onClick={() => removeBlog(blog.id)}>remove</button>
            </div>
        )
    }
}

export default Blog
