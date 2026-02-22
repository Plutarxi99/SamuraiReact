import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://avatars.mds.yandex.net/i?id=4b6002adae5068d9706c4c020ed68534_l-5221577-images-thumbs&n=13'
                alt='avatar'></img>
            {props.message}
            <div className={s.like}>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    )
}

export default Post;