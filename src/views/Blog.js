import { useState, useEffect, useContext } from 'react'
import Post from '../components/Post'
import {DataContext} from '../contexts/DataProvider'

export default function Blog() {
    const { posts, addPost } = useContext(DataContext)

    function handleSubmit (event){
        event.preventDefault()

        const formData = new FormData(event.target)
        
       addPost(formData.get('title'), formData.get('body'))
    }

    return (
        <div className="posts">
            <h1>Blog</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title' />
                <input type="text" name='body' placeholder='Body' />
                <button> Add Post</button>

            </form>

            { posts.map(post => <Post key={post.id} post={post} showLink={true} />) }
        </div>    
    )
}