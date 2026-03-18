import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.user) return <Preloader />;

    return (
        <div className={s.profileInfo}>
            <div className={s.coverWrapper}>
                <img
                    className={s.coverPhoto}
                    src='https://img.freepik.com/premium-photo/abstract-colorful-background-elegant-design-cover-modern-composition_1145931-59563.jpg?semt=ais_hybrid&w=740'
                    alt="cover"
                />
            </div>
            <div className={s.profileBody}>
                <div className={s.avatarWrapper}>
                    <img
                        className={s.avatar}
                        src={props.user.photo}
                        alt="avatar"
                    />
                </div>
                <div className={s.userMeta}>
                    <span className={s.fullName}>{props.user.full_name}</span>
                    <ProfileStatus user={props.user} updateStatus={props.updateStatus} />
                    <span className={s.location}>
                        {props.user.location?.city}, {props.user.location?.country}
                    </span>
                </div>
                <div className={s.actions}>
                    <button className={s.btnEdit}>Редактировать профиль</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
