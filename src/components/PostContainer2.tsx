import React from 'react'
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import '../App.css'

const PostContainer2 = () => {
    const {data:posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    return (
        <div>
        <div className="post__list">
            {isLoading && <h1>Go Loanding</h1>}
            {error && <h1> cheked now error</h1>}
            {/* {posts && posts.map(post=>
                <PostItem key={post.id} post={post}/>)} */}
        </div>
        </div>
    )
};

export default PostContainer2
