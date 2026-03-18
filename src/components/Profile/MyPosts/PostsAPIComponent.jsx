import {Component} from "react";
import MyPosts from "./MyPosts";
import withRouter from "../../common/hoc/withRouter";

class MyPostsAPIComponent extends Component {
    componentDidMount() {
        this.props.getPostsByUser(this.props.router.params.userId);
    }

    render() {
        return (
            <MyPosts
                {...this.props}
                posts={this.props.posts}
                newPostText={this.props.newPostText}
            />
        )
    }
}

export default withRouter(MyPostsAPIComponent);