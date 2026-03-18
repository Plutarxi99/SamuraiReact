import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = [...props.posts].sort((a, b) => b.id - a.id).map(post => (
        <Post key={post.id} message={post.content} likesCount={post.likedBy.length}/>
    ))

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.createPost(props.newPostText);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.composer}>
                <h3>My post</h3>
                <div>
                    <textarea className={s.textarea} ref={newPostElement}
                              onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button className={s.addButton} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;