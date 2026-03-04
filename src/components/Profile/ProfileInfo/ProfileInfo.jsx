import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <img
                className={s.coverPhoto}
                src='https://img.freepik.com/premium-photo/abstract-colorful-background-elegant-design-cover-modern-composition_1145931-59563.jpg?semt=ais_hybrid&w=740'
                alt='content' />
            <div className={s.descriptionBlock}>
                ava + deascrtiption
            </div>
        </div>

    )
}

export default ProfileInfo;