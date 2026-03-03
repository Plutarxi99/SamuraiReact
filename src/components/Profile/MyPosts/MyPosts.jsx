import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {updateNewPostTextActionCreator} from "../../../redux/profile_reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => (
        <Post message={post.message} likesCount={post.likesCount}/>
    ))

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;