import {
    addPostActionCreator, createPost,
    getPostsByUser,
    getUsersPosts,
    updateNewPostTextActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import PostsAPIComponent from "./PostsAPIComponent";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        getPostsByUser: (userId) => dispatch(getPostsByUser(userId)),
        createPost: (content) => dispatch(createPost(content)),
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsAPIComponent);

export default SuperMyPostsContainer;