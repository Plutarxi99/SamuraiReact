import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postsData.map(post => (
                    <Post message={post.message} likesCount={post.likesCount}/>
                ))}
            </div>
        </div>
    )
}

export default MyPosts;