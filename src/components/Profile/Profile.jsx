import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo user={props.user} photoUrl={props.photoUrl} />
            <SuperMyPostsContainer />
        </div>
    )
}

export default Profile;