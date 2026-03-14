import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.user) return <Preloader/>;

    return (
        <div>
            <img
                className={s.coverPhoto}
                src='https://img.freepik.com/premium-photo/abstract-colorful-background-elegant-design-cover-modern-composition_1145931-59563.jpg?semt=ais_hybrid&w=740'
                alt='content' />
            <div className={s.descriptionBlock}>
                <img
                className={s.coverPhoto}
                src={props.photoUrl}
                />
                ava + deascrtiption
            </div>
        </div>

    )
}

export default ProfileInfo;