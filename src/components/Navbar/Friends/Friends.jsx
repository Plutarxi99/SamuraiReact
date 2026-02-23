import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>{props.name[0]}</div>
            <span className={s.name}>{props.name}</span>
        </div>
    )
}

export default Friends;