import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => {
    const WithRouter = (props) => {
        const params = useParams();
        return <WrappedComponent {...props} router={{ params }} />;
    };

    WithRouter.displayName = `WithRouter(${WrappedComponent.displayName ?? WrappedComponent.name ?? "Component"})`;

    return WithRouter;
};

export default withRouter;