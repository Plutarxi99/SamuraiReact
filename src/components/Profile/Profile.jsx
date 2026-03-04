import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo/>
            <SuperMyPostsContainer />
        </div>
    )
}

export default Profile;