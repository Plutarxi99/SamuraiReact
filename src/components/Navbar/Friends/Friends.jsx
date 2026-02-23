import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.item}>
                {props.id}, {props.name}
            </div>
        </div>
    )
}

export default Friends;